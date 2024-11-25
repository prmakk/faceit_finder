import "dotenv/config";
import { Bot, GrammyError, HttpError } from "grammy";

const bot = new Bot(process.env.BOT_API_TOKEN);

bot.command("start", async (ctx) => {
    await ctx.reply("Нажми на кнопку ниже, чтобы открыть приложение 👇", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Найти FACEIT аккаунт 🕵️",
                        web_app: { url: "https://faceit-finder.netlify.app" },
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
