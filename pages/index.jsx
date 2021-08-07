import axios from "axios";
import { Router, useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Container, Form, Spinner, Toast } from "react-bootstrap";

export default function Home() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState();
    const [showToast, setShowToast] = useState(false);
    const [message, setMessage] = useState();

    const router = useRouter();

    useEffect(() => {
        axios
            .get("/api/user/jwt-verify")
            .then((res) => {
                if (res.data.data.verified) {
                    router.push("/verified");
                } else {
                    setSent(true);
                }
            })
            .catch(console.log);
    }, []);

    const handleSubmit = async () => {
        setLoading(true);
        console.log(email);
        console.log(password);

        if (email && password) {
            const payload = {
                email,
                password,
            };

            axios
                .post("/api/user/signup", payload)
                .then((res) => {
                    if (res.data.data.user_info.verified) {
                        router.push("/verified");
                    } else {
                        setLoading(false);
                        setSent(true);
                        console.log(res);
                    }

                    localStorage.setItem("token", res.data.data.token);
                })
                .catch((e) => {
                    // setMessage(e.data.msg);
                    setShowToast(true);
                    setSent(false);
                    setLoading(false);
                });
        } else {
            setLoading(false);
            setShowToast(true);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setSent(false);
    };

    return (
        <div>
            <Head>
                <title>Email Verification</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container style={{ marginTop: "40px" }}>
                <Toast show={showToast} onClose={() => setShowToast(false)} style={{ marginBottom: "40px" }}>
                    <Toast.Header>
                        <strong className="me-auto">Signup Error</strong>
                    </Toast.Header>
                    <Toast.Body>Email or Password incorrect or account already exists</Toast.Body>
                </Toast>
                {sent ? (
                    <>
                        <h2>Please verify your email</h2>
                        <a onClick={handleLogout} style={{ marginTop: "24px", textDecoration: "underline" }}>
                            Logout
                        </a>
                    </>
                ) : (
                    <Form form={Form}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onChange={(value) => setEmail(value.target.value)}
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onChange={(value) => setPassword(value.target.value)}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        {loading ? (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        ) : (
                            <Button onClick={handleSubmit} variant="primary" type="submit">
                                Submit
                            </Button>
                        )}
                    </Form>
                )}
            </Container>
        </div>
    );
}
