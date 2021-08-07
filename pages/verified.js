import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Container, Form, Spinner, Toast } from "react-bootstrap";

export default function verified() {
    const [email, setEmail] = useState();
    const router = useRouter();

    useEffect(() => {
        axios
            .get("/api/user/jwt-verify")
            .then((res) => {
                setEmail(res.data.data.email);
                if (!res.data.data.verified || !localStorage.getItem("token")) {
                    router.push("/");
                }
            })
            .catch(() => {
                router.push("/");
            });
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/");
    };

    return (
        <>
            <Container style={{ marginTop: "24px", textAlign: "center" }}>
                <h1>Your email has been verified</h1>
                <h2 style={{ color: "green" }}>{email}</h2>
                <a onClick={handleLogout} style={{ marginTop: "24px", textDecoration: "underline" }}>
                    Logout
                </a>
            </Container>
        </>
    );
}
