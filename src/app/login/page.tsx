    /* eslint-disable @typescript-eslint/no-explicit-any */
    'use client';
    // import { Stars } from "@react-three/drei";
    // import { Canvas } from "@react-three/fiber";
    import { animate } from "motion";
    import { useMotionValue, useMotionTemplate, motion } from "motion/react";
    import { useEffect, useState } from "react";
    import axios from "axios";
    import { useRouter } from "next/navigation";

    import React from "react";
    import { Label } from "@/components/ui/label";
    import { Input } from "@/components/ui/input";
    import { cn } from "@/lib/utils";
    import Link from "next/link";
    import { useAuth } from "@/context/authcontext";

    export default function LoginPage() {
        const COLORS_TOP = React.useMemo(() => ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"], []);
        const color = useMotionValue(COLORS_TOP[0]);
        
        useEffect(() => {
            animate(color, COLORS_TOP, {
                ease: "easeInOut",
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
            });
        }, [COLORS_TOP, color]);

        const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
        const border = useMotionTemplate`1px solid ${color}`;
        const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

        return (
            <motion.section
                style={{ backgroundImage }}
                className="w-full h-screen grid place-content-center overflow-hidden bg-gray-950 text-gray-200"
            >
                <motion.div
                    style={{ border, boxShadow }}
                    className="relative w-screen h-screen md:w-fit md:h-fit z-50 rounded-none md:rounded-2xl bg-gray-950/10 text-gray-50 md:transition-colors hover:bg-gray-950/50"
                >
                    <LoginForm />
                </motion.div>

                {/* <div className="absolute inset-0 z-0">
                    <Canvas>
                        <Stars radius={50} count={2500} factor={4} fade speed={2} />
                    </Canvas>
                </div> */}
            </motion.section>
        );
    }

    const LoginForm = () => {
        const router = useRouter();
        const [formData, setFormData] = useState({ email: "", password: "" });
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState("");
        const { setUserFromToken } = useAuth();

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, [e.target.id]: e.target.value });
        };

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setLoading(true);
            setError("");

            try {
                const response = await axios.post("/api/auth/login", formData);
                console.log("Login success:", response.data);

                const token = response.data.token;

                if (token) {
                    localStorage.setItem("token", token);
                }
                
                setUserFromToken();

                router.push("/"); 
            } catch (err: any) {
                const message = err.response?.data?.error || "Login failed";
                setError(message);
            } finally {
                setLoading(false);
            }
        };

        return (
            <div className="shadow-input mx-auto w-full h-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
                <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                    Welcome to Learn AI
                </h2>
                <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
                    Login to Learn AI if you can because we don&apos;t have a login flow yet
                </p>

                <form className="my-8 text-start" onSubmit={handleSubmit}>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="projectmayhem@fc.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </LabelInputContainer>

                    {error && (
                        <p className="text-sm text-red-500 mb-4">{error}</p>
                    )}

                    <button
                        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login →"}
                        <BottomGradient />
                    </button>

                    <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                    <div className="flex items-center space-x-2">
                        <span>Don&apos;t have an account?</span>
                        <Link
                            href="/signup"
                            className="text-sm text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-50"
                        >
                            Sign Up
                        </Link>
                    </div>
                </form>
            </div>
        );
    };

    const BottomGradient = () => (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );

    const LabelInputContainer = ({
        children,
        className,
    }: {
        children: React.ReactNode;
        className?: string;
    }) => (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
