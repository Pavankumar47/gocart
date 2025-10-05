import { Inngest } from "inngest";

const inngest = new Inngest({
    id: "gocart-eccommerce",
    eventKey: process.env.INNGEST_EVENT_KEY,
    apiUrl: process.env.INNGEST_API_URL || "https://api.inngest.com",
});
