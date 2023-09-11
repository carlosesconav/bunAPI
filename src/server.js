import figlet from "figlet";

export const server = Bun.serve({
    fetch(){
        const body = figlet.textSync('Bun!');
        return new Response(body);
        return new Response('Bun!');
    },
    port: 3000,
});

