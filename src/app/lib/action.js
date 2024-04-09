"use server";

import { signIn } from "@/auth";
import { cookies } from "next/headers";

export async function authenticate(_currentState, formData) {
    try {
        await signIn("credentials", formData);
    } catch (error) {
        if (error) {
            switch (error.type) {
                case "CredentialsSignin":
                    return "Invalid credentials.";
                default:
                    return "Something went wrong.";
            }
        }
        throw error;
    }
}

export async function handleLogin(sessionData) {
    const encryptedSessionData = encrypt(sessionData);
    cookies().set("session", encryptedSessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // One week
        path: "/",
    });
}
