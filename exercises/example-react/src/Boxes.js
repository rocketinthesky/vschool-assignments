import React from "react";
import Box from "./Box";

function Boxes(){
    const boxes = [
        {
            title: "Hidden Talents",
            subTitle: "it might be too late",
            info: "Far quitting dwelling graceful the likewise received building. An fact so to that show am shed sold cold. Unaffected remarkably get yet introduced excellence terminated led. Result either design saw she esteem and. On ashamed no inhabit ferrars it ye besides resolve. Own judgment directly few trifling. Elderly as pursuit at regular do parlors. Rank what has into fond she.",
            backgroundColor: "#FFAAC3"
        },{
            title: "Candy Kingdom",
            subTitle: "dark secrets in happy land",
            info: "Manor we shall merit by chief wound no or would. Oh towards between subject passage sending mention or it. Sight happy do burst fruit to woody begin at. Assurance perpetual he in oh determine as. The year paid met him does eyes same. Own marianne improved sociable not out. Thing do sight blush mr an. Celebrated am announcing delightful remarkably we in literature it solicitude. Design use say piqued any gay, supply. Front sex match vexed her those great.",
            backgroundColor: "#AAFFB4"
        },{
            title: "Forever",
            subTitle: "not as long as you might think",
            info: "Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.",
            backgroundColor: "#C3FFCA"
        },{
            title: "Haunted House",
            subTitle: "daytime nightmares",
            info: "Feet evil to hold long he open knew an no. Apartments occasional boisterous as solicitude to introduced. Or fifteen covered we enjoyed demesne is in prepare. In stimulated my everything it literature. Greatly explain attempt perhaps in feeling he. House men taste bed not drawn joy. Through enquire however do equally herself at. Greatly way old may you present improve. Wishing the feeling village him musical. ",
            backgroundColor: "#B2B2B2"
        },{
            title: "Guitar Hero",
            subTitle: "feel like a rock star",
            info: "Unpleasant nor diminution excellence apartments imprudence the met new. Draw part them he an to he roof only. Music leave say doors him. Tore bred form if sigh case as do. Staying he no looking if do opinion. Sentiments way understood end partiality and his. ",
            backgroundColor: "#E4FFFC"
        },{
            title: "Trouble Maker",
            subTitle: "he's a menace",
            info: "Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length. Advantages prosperous remarkably my inhabiting so reasonably be if. Too any appearance announcing impossible one. Out mrs means heart ham tears shall power every. ",
            backgroundColor: "#8FE89C"
        },{
            title: "Game Table",
            subTitle: "it's not what it seems",
            info: "Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up he it enjoyment agreeable depending. Timed voice share led his widen noisy young. On weddings believed laughing although material do exercise of. Up attempt offered ye civilly so sitting to. She new course get living within elinor joy. She her rapturous suffering concealed. ",
            backgroundColor: "#E8FFAA"
        },{
            title: "Dogs",
            subTitle: "the good and the great",
            info: "Cordially convinced did incommode existence put out suffering certainly. Besides another and saw ferrars limited ten say unknown. On at tolerably depending do perceived. Luckily eat joy see own shyness minuter. So before remark at depart. Did son unreserved themselves indulgence its. Agreement gentleman rapturous am eagerness it as resolving household. Direct wicket little of talked lasted formed or it. Sweetness consulted, may prevailed for bed out sincerity.",
            backgroundColor: "#E8E3CD"
        },{
            title: "Coffee Stain",
            subTitle: "on the floor of the room",
            info: "Much did had call new drew that kept. Limits expect wonder law she. Now has you views woman noisy match money rooms. To up remark it eldest length oh passed. Off because yet mistake feeling has men. Consulted disposing to moonlight ye extremity. Engage piqued in on coming. ",
            backgroundColor: "#FFD19D"
        },{
            title: "The Door",
            subTitle: "an entry",
            info: "Am no an listening depending up believing. Enough around remove to barton agreed regret in or it. Advantage mr estimable be commanded provision. Year well shot deny shew come now had. Shall downs stand marry taken his for out. Do related mr account brandon an up. Wrong for never ready ham these witty him. Our compass see age uncivil matters weather forbade her minutes. Ready how but truth son new under.",
            backgroundColor: "aqua"
        }
    ]
    return boxes.map((box) => {
                return <Box
                    title={box.title}
                    subTitle={box.subTitle}
                    backgroundColor={box.backgroundColor}
                    info={box.info}
                />
            })
}

export default Boxes;
