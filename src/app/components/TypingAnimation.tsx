"use client";

import { AnimationSequences } from "@/configs/animation-sequence";
import { useTranslations } from "next-intl"
import { TranslateAnimation } from "./TranslateAnimation";

export const TypingAnimation = () => {
    const t = useTranslations('landing');
    const sequences = AnimationSequences.flatMap(item => [
        t(item.title),
        item.speed,
    ]);
    return (
        <TranslateAnimation sequence={sequences} />
    )
}