import { Router } from "express";
import { chain } from "../ai/chains.ai.js";

const router = Router();

router.post('/', async (req, res) => {
    const { question, history = [] } = req.body;
    console.log("Received question:", question);

    const answer = await chain.invoke({
        history, question
    });

    console.log('ANSWER', answer);

    res.json({ answer });
});

export default router;