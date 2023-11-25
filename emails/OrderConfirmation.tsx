import { Body, Column, Container, Font, Head, Hr, Html, Img, Link, Preview, Row, Tailwind } from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

export default function OrderConfirmation({
    orderId = "64647373",
    order = {
        name: "Testing",
        email: "asd@asd.com",
        phone: "72723634",
        items: {
            rice: [
                { quantity: 2, toUdon: false, addOn: { id: "rs0m4u4ar87bq3VNOHdg", category: "addOn", name: "清新胡麻沙律", price: 15 }, item: { id: "neAkunm6zMmhto4abtfs", category: "beef", name: "和風牛肉丼", price: 58 } },
                { quantity: 1, toUdon: false, addOn: null, item: { id: "L0dvxxiGcT4P9Rcdfh2H", category: "beef", name: "溏心蛋牛肉丼", price: 65 } },
                { quantity: 1, toUdon: false, addOn: null, item: { id: "QgmarHpqUM4hqTBgKeJ5", category: "combo", name: "牛肉烤雞雙拼丼", price: 75 } }
            ],
            noodles: [
                {
                    quantity: 2,
                    addOns: [
                        { id: "L9rUWARSkPczfp20CQKz", category: "addOn", name: "魷魚餅", price: 12, minimumAddOns: 0 },
                        { id: "hKamOhwMn1WaQWWP24wX", category: "addOn", name: "照燒雞肉", price: 16, minimumAddOns: 0 },
                        { id: "ICBqHGTTSEyuF2j9sgQH", category: "addOn", name: "日式醬燒叉燒", price: 16, minimumAddOns: 0 },
                        { id: "7ck2mfNRvqkyE2xiYptY", category: "addOn", name: "手工和牛餃子", price: 12, minimumAddOns: 0 }
                    ],
                    item: { id: "6A4pbFkSNuelKcAk8tZI", category: "main", name: "北海道野葛麵", price: 15, minimumAddOns: 3 }
                },
                { quantity: 1, addOns: [], item: { id: "uyKkFK2px65zHLpW49nA", category: "main", name: "開胃日式冷麵（青瓜絲，蟹籽，蟹捧，魚片，北海道野葛麵）", price: 45, minimumAddOns: 0 } }
            ],
            snacks: [
                { quantity: 1, item: { id: "c0cIObwMGXLLu3Zby5Qc", name: "玉子燒", price: 15 } },
                { quantity: 1, item: { id: "BinljS1mhmoTEDYSKKq8", name: "炸豚肉餃子（6件）", price: 25 } }
            ]
        },
        total: 513,
        delivery: false,
        address: {
            region: "香港島",
            district: "Shatin",
            street: "No street",
            building: "No building",
            floor: null,
            flat: "A"
        },
        date: new Date("2023-11-23T21:06:31.531Z"),
        comments: "j o jo j j jo ooj j ",
        delivered: false
    }
}) {
    return (
        <Tailwind>
            <Html style={{ fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif' }} className="bg-neutral-50 text-neutral-800">
                <Head />
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
                        format: "woff2"
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
                <Preview>訂單確認 - 沖繩味之賞 [{orderId}]</Preview>
                <Body>
                    <Container>
                        <section className="bg-yellow-400 p-4">
                            <h2>訂單確認 - 沖繩味之賞 [#{orderId}]</h2>
                            <p className="text-lg">Hello {order.name}!</p>
                            <p className="text-lg">好消息！我們已經收到您嘅訂單！</p>
                        </section>
                        <section className="p-4 border-2">
                            <p className="text-xl">訂單詳情</p>
                            <Hr className="border-yellow-500" />
                            <p>訂單編號：#{orderId}</p>
                            <p>訂單日期：{order.date.toLocaleDateString()}</p>
                            {order.delivery && order.address ? <p>送餐地址：{Object.values(order.address).join(" ")}</p> : <p>自取地址：葵涌 梨木道32-50號 金運工業大廈 第二座 Foodie City</p>}
                            {order.comments && <p>備註：{order.comments}</p>}
                        </section>
                        <section className="p-4">
                            <p className="text-xl">美食</p>
                            <Hr className="border-yellow-500" />
                            {order.items.rice.map((rice) => (
                                <Row>
                                    <Column>
                                        <p>
                                            <span>{rice.item.name}</span>
                                            {rice.addOn && <span>（配{rice.addOn.name} </span>}
                                        </p>
                                    </Column>
                                    <Column>
                                        <p className="text-end">
                                            <span>${rice.item.price + (rice.addOn?.price || 0)}</span> <span>x {rice.quantity}</span>
                                        </p>
                                    </Column>
                                </Row>
                            ))}
                            {order.items.noodles.map((noodle) => (
                                <Row>
                                    <Column>
                                        <p>
                                            <span>{noodle.item.name}</span>
                                            {!!noodle.addOns.length && <span>（配{noodle.addOns.map((addOn) => addOn.name).join("，")}）</span>}
                                        </p>
                                    </Column>
                                    <Column>
                                        <p className="text-end">
                                            <span>${noodle.addOns.reduce((total, addOn) => (total += addOn.price), 0) + noodle.item.price}</span> <span>x {noodle.quantity}</span>
                                        </p>
                                    </Column>
                                </Row>
                            ))}
                            {order.items.snacks.map((snack) => (
                                <Row>
                                    <Column>
                                        <p>
                                            <span>{snack.item.name}</span>
                                        </p>
                                    </Column>
                                    <Column>
                                        <p className="text-end">
                                            <span>${snack.item.price}</span> <span>x {snack.quantity}</span>
                                        </p>
                                    </Column>
                                </Row>
                            ))}
                            <Hr className="border-yellow-500" />
                            <Row>
                                <Column>
                                    <h3>總計</h3>
                                </Column>
                                <Column>
                                    <h3 className="text-end">${order.total}</h3>
                                </Column>
                            </Row>
                        </section>
                        <section className="bg-yellow-400 p-4 text-center">
                            <h3>有咩問題歡迎搵我地！</h3>
                            <p>
                                地址：
                                <Link href="https://maps.app.goo.gl/SntJopHUUbAEf1zo6" className="text-neutral-800 underline">
                                    葵涌 梨木道32-50號 金運工業大廈 第二座 Foodie City
                                </Link>
                            </p>

                            <p>
                                電話：
                                <Link href="tel:95582500" className="text-neutral-800 underline">
                                    +852 9558 2500
                                </Link>
                            </p>
                            <p>
                                WhatsApp:{" "}
                                <Link href="https://api.whatsapp.com/send?phone=85263439624" className="text-neutral-800 underline">
                                    +852 6343 9624
                                </Link>
                            </p>
                        </section>
                        <Img src={`/static/contact-us.png`} width="100" height="50" alt="invited you to" />
                    </Container>
                </Body>
            </Html>
        </Tailwind>
    );
}
