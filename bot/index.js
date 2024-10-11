import "dotenv/config";
import { Bot, GrammyError, HttpError } from "grammy";

const bot = new Bot(process.env.BOT_API_TOKEN);

bot.command("start", async (ctx) => {
    await ctx.reply("Click the button below to open the Web App!", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Start 🚀",
                        web_app: { url: "https://prmak.netlify.app" },
                    },
                ],
            ],
        },
    });
    await ctx.react("🍌");
});

bot.catch((error) => {
    const ctx = error.ctx;
    console.log(ctx);
    const e = error.error;

    if (e instanceof GrammyError) {
        console.log("error in request");
    } else if (e instanceof HttpError) {
        console.log("Error within telegram :(");
    } else {
        console.log("Unknown error");
    }
});

bot.start();
