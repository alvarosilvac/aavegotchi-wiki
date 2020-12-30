

interface Table {
    tableName: string
    tableData: TableData[]
}

interface TableData {
    headers: any
    data: any
}

export const tables
    = [
        {
            tableName: "linkWearablesTable",
            tableCaption: "Link-Themed Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity"],
                data: [
                    [`<img src="/wearables/link/camo-cap.svg" alt = "aavegotchi chainlink camo cap"/>`, "1", "Camo Hat", "Common", "AGG +1", "1000"],
                    [`<img src="/wearables/link/camo-pants.svg" alt = "aavegotchi chainlink camo pants" />`, "2", "Camo Pants", "Common", "AGG +1", "1000"],
                    [`<img src="/wearables/link/mk2-grenade.svg" alt = "aavegotchi chainlink mk2 grenade" />`, "3", "MK2 Grenade", "Common", "AGG +1", "1000"],
                    [`<img src="/wearables/link/snow-camo-cap.svg"  alt = "aavegotchi chainlink snow camo cap" />`, "4", "Snow Camo Hat", "Uncommon", "AGG +1, SPK +1", "500"],
                    [`<img src="/wearables/link/snow-camo-pants.svg" alt = "aavegotchi chainlink snow camo pants" />`, "5", "Snow Camo Hat", "Uncommon", "AGG +1, SPK +1", "500"],
                    [`<img src="/wearables/link/m67-grenade.svg" alt = "aavegotchi chainlink m67 grenade" />`, "6", "M67 Grenade", "Uncommon", "AGG +2", "500"],
                    [`<img src="/wearables/link/marine-cap.svg" alt = "aavegotchi chainlink marine cap" />`, "7", "Marine Cap", "Rare", "AGG +2, BRN +1", "300"],
                    [`<img src="/wearables/link/marine-suit.svg" alt = "aavegotchi chainlink marine suit" />`, "8", "Marine Jacket", "Rare", "AGG +2, BRN +1", "300"],
                    [`<img src="/wearables/link/walkie-talkie.svg" alt = "aavegotchi chainlink walkie talkie" />`, "9", "Walkie Talkie", "Rare", "NRG +1, SPK +1, BRN +1", "300"],
                    [`<img src="/wearables/link/link-white-cap.svg" alt = "aavegotchi chainlink white cap" />`, "10", "Link White Hat", "Legendary", "AGG +2, BRN +2", "150"],
                    [`<img src="/wearables/link/link-mess-dress.svg" alt = "aavegotchi chainlink mess dress" />`, "11", "Link Mess Dress", "Legendary", "AGG +2, BRN +2", "150"],
                    [`<img src="/wearables/link/link-bubbly.svg" alt = "aavegotchi chainlink bubbly" />`, "12", "Link Bubbly", "Legendary", "NRG +2, BRN -2", "150"],
                    [`<img src="/wearables/link/sergey-beard.svg" alt = "aavegotchi chainlink sergey beard" />`, "13", "Sergey Beard", "Mythical", "NRG -1, AGG +1, BRN +3", "50"],
                    [`<img src="/wearables/link/sergey-eyes.svg" alt = "aavegotchi chainlink sergey eyes" />`, "14", "Sergey Eyes", "Mythical", "SPK +1, BRN +4", "50"],
                    [`<img src="/wearables/link/sergey-red.svg" alt = "aavegotchi chainlink red plaid" />`, "15", "Red Plaid", "Mythical", "NRG +3, AGG +2", "50"],
                    [`<img src="/wearables/link/sergey-blue.svg" alt = "aavegotchi chainlink blue plaid" />`, "16", "Blue Plaid", "Godlike", "NRG -4, AGG -2", "5"],
                    [`<img src="/wearables/link/link-cube.svg" alt = "aavegotchi chainlink cube"/>`, "17", "LINK Cube", "Godlike", "BRN +6", "5"],

                ]
            }
        },

        {
            tableName: "aaveWearablesTable",
            tableCaption: "Aave-Themed Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity"],
                data: [
                    [`<img src="/wearables/aave/hero-mask.svg" alt = "aavegotchi aave hero mask" />`, "18", "Aave Hero Mask", "Common", "SPK +1", "1000"],
                    [`<img src="/wearables/aave/hero-shirt.svg" alt = "aavegotchi aave hero shirt" />`, "19", "Aave Hero Shirt", "Common", "SPK +1", "1000"],
                    [`<img src="/wearables/aave/aave-plush-toy.svg" alt = "aavegotchi aave plush toy" />`, "20", "Aave Plush Toy", "Common", "SPK +1", "1000"],
                    [`<img src="/wearables/aave/captain-aave-mask.svg" alt = "aavegotchi aave captain aave mask" />`, "21", "Captain Aave Mask", "Uncommon", "NRG +1, SPK +1", "500"],
                    [`<img src="/wearables/aave/captain-aave-suit.svg" alt = "aavegotchi aave captain aave suit" />`, "22", "Captain Aave Suit", "Uncommon", "NRG +1, SPK +1", "500"],
                    [`<img src="/wearables/aave/captain-aave-shield.svg" alt = "aavegotchi aave captain aave shield" />`, "23", "Captain Aave Shield", "Uncommon", "NRG +2", "500"],
                    [`<img src="/wearables/aave/thaave-helmet.svg" alt = "aavegotchi aave thaave helmet" />`, "24", "Thaave Helmet", "Rare", "NRG +2, SPK +1", "250"],
                    [`<img src="/wearables/aave/thaave-suit.svg" alt = "aavegotchi aave thaave suit" />`, "25", "Thaave Suit", "Rare", "NRG +2, SPK +1", "250"],
                    [`<img src="/wearables/aave/thaave-hammer.svg" alt = "aavegotchi aave thaave hammer" />`, "26", "Thaave Hammer", "Rare", "NRG +3", "250"],
                    [`<img src="/wearables/aave/marc-hair.svg" alt = "aavegotchi aave marc hair" />`, "27", "Marc Hair", "Legendary", "NRG +2, AGG +2", "100"],
                    [`<img src="/wearables/aave/marc-outfit.svg" alt = "aavegotchi aave marc outfit" />`, "28", "Marc Outfit", "Legendary", "NRG +2, AGG +2", "100"],
                    [`<img src="/wearables/aave/rekt-sign.svg" alt = "aavegotchi aave rekt sign" />`, "29", "REKT Sign", "Legendary", "BRN -4", "100"],
                    [`<img src="/wearables/aave/jordan-hair.svg" alt = "aavegotchi aave jordan hair" />`, "30", "Jordan Hair", "Mythical", "AGG -2, SPK +3", "50"],
                    [`<img src="/wearables/aave/jordan-suit.svg" alt = "aavegotchi aave jordan suit" />`, "31", "Jordan Suit", "Mythical", "NRG -3, SPK +1, BRN +1", "50"],
                    [`<img src="/wearables/aave/aave-flag.svg" alt = "aavegotchi aave flag" />`, "32", "Aave Flag", "Mythical", "AGG -2, SPK +3", "50"],
                    [`<img src="/wearables/aave/stani-hair.svg" alt = "aavegotchi aave stani hair" />`, "33", "Stani Hair", "Godlike", "AGG -3, BRN +3", "5"],
                    [`<img src="/wearables/aave/stani-lifejacket.svg" alt = "aavegotchi aave stani lifejacket"/>`, "34", "Stani Lifejacket", "Godlike", "NRG +3, AGG -3", "5"],
                    [`<img src="/wearables/aave/aave-boat.svg" alt = "aavegotchi aave boat"/>`, "35", "Aave Boat", "Godlike", "AGG -6", "5"],

                ]
            }
        },
		
		        {
            tableName: "ethereumWearablesTable",
            tableCaption: "Ethereum-Themed Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity"],
                data: [
                    [`<img src="/wearables/ethereum/eth logo glasses.svg" alt = "aavegotchi ETH Logo Glasses" />`, "36", "ETH Logo Glasses", "Common", "", "1000"],
					[`<img src="/wearables/ethereum/eth tshirt.svg" alt = "aavegotchi ETH T-Shirt" />`, "37", "ETH TShirt", "Common", "", "1000"],
					[`<img src="/wearables/ethereum/32 eth coin.svg" alt = "aavegotchi 32 ETH Coin" />`, "38", "32 ETH Coin", "Common", "", "1000"],
					[`<img src="/wearables/ethereum/foxy mask.svg" alt = "aavegotchi Foxy Mask" />`, "39", "Foxy Mask", "Uncommon", "", "500"],
					[`<img src="/wearables/ethereum/foxy tail.svg" alt = "aavegotchi Foxy Tail" />`, "40", "Foxy Tail", "Uncommon", "", "500"],
					[`<img src="/wearables/ethereum/trezor wallet.svg" alt = "aavegotchi Trezor Wallet" />`, "41", "Trezor Wallet", "Uncommon", "", "500"],
					[`<img src="/wearables/ethereum/eagle mask.svg" alt = "aavegotchi Eagle Mask" />`, "42", "Eagle Mask", "Rare", "", "250"],
					[`<img src="/wearables/ethereum/nogara armor.svg" alt = "aavegotchi Nogara Armor" />`, "43", "Nogara Armor", "Rare", "", "250"],
					[`<img src="/wearables/ethereum/dao egg.svg" alt = "aavegotchi DAO Egg" />`, "44", "DAO Egg", "Rare", "", "250"],
					[`<img src="/wearables/ethereum/ape mask.svg" alt = "aavegotchi Ape Mask" />`, "45", "Ape Mask", "Legendary", "", "100"],
					[`<img src="/wearables/ethereum/half rekt shirt.svg" alt = "aavegotchi Half Rekt Shirt" />`, "46", "Half Rekt Shirt", "Legendary", "", "100"],
					[`<img src="/wearables/ethereum/waifu pillow.svg" alt = "aavegotchi Waifu Pillow" />`, "47", "Waifu Pillow", "Legendary", "", "100"],
					[`<img src="/wearables/ethereum/xibot mohawk.svg" alt = "aavegotchi Xibot Mohawk" />`, "48", "Xibot Mohawk", "Mythical", "", "50"],
					[`<img src="/wearables/ethereum/coderdan shades.svg" alt = "aavegotchi Coderdan Shades" />`, "49", "Coderdan Shades", "Mythical", "", "50"],
					[`<img src="/wearables/ethereum/gldnxross robe.svg" alt = "aavegotchi GldnXross Robe" />`, "50", "GldnXross Robe", "Mythical", "", "50"],
					[`<img src="/wearables/ethereum/mudgen diamond.svg" alt = "aavegotchi Mudgen Diamond" />`, "51", "Mudgen Diamond", "Mythical", "", "50"],
					[`<img src="/wearables/ethereum/galaxy brain.svg" alt = "aavegotchi Galaxy Brain" />`, "52", "Galaxy Brain", "Godlike", "", "5"],
					[`<img src="/wearables/ethereum/all seeing eyes.svg" alt = "aavegotchi All Seeing Eyes" />`, "53", "All Seeing Eyes", "Godlike", "", "5"],
					[`<img src="/wearables/ethereum/llamacorn shirt.svg" alt = "aavegotchi Llamacorn Shirt" />`, "54", "Llamacorn Shirt", "Godlike", "", "5"]
                ]
            }
        },
		
		
		
		
		

        {
            tableName: "wearablesBRStable",
            tableCaption: "Wearable Rarity and BRS Bonus",
            tableData: {
                headers: ["Rarity Type", "Quantity", "BRS Bonus"],
                data: [
                    ["Common", "1000+", "+1"],
                    ["Uncommon", "500-999", "+2"],
                    ["Rare", "250-499", "+5"],
                    ["Legendary", "100-249", "+10"],
                    ["Mythical", "10-99", "+20"],
                    ["Godlike", "1-9", "+50"],

                ]
            }
        },
    ]
