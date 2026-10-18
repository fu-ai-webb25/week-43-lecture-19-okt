import { Router } from "express";

const router = Router();

router.post('/', async (req, res) => {
    const { question, history = [] } = req.body;
    console.log("Received question:", question);


    const answer = await llm.invoke([
        ...history,
        question
    ]);
    res.json({ answer : answer.content });
});

export default router;