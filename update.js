import { writeFile } from "fs/promises";

(async()=>{
  try {
    // my own api url that generates the chart as png
    const res = await fetch(process.env.API0+"tonnel",{
      headers: {
        "Authorization": `Bearer ${process.env.KEY}`,
      }
    });
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }
    await writeFile("./tonnel.png",Buffer.from(await res.arrayBuffer()));
    console.log("✅");
  } catch (e) {
    console.error("❌ ",e.stack);
  }
})();
