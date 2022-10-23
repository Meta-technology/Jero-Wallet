import Botpoison from "@botpoison/browser";
          
const botpoison = new Botpoison({
  publicKey: "pk_11962bc3-48db-4281-bb83-aa411cd4588c"
});

const { solution } = await botpoison.challenge();
