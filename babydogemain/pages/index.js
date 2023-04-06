import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import logo from "../public/logo.png";
import { SocialIcon } from "react-social-icons";
const inter = Inter({ subsets: ["latin"] });
import coingecko from "../public/coingecko.png";
import pancakeswap from "../public/pancakeswap.png";
import bsc from "../public/bsc.png";
import cmc from "../public/cmc.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Babydoge Original Vision</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        <div className=" margin-auto text-white">
          <div className="flex justify-center  ">
            <div className="w-full overflow-hidden  items-center flex flex-col text-center">
              <div className="w-[150px] h-[150px]  rounded-full">
                <Image src={logo} className="rounded-full"></Image>
              </div>
              <div className="text-5xl pt-[30px]  font-black">$BDOV</div>
              <div className="text-[#FF1640] text-[24px] font-black pb-16">
                Babydoge Original Vision
              </div>
              <div className="flex w-[300px] md:w-[500px] justify-between md:justify-around">
                <ConnectButton.Custom>
                  {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    authenticationStatus,
                    mounted,
                  }) => {
                    // Note: If your app doesn't use authentication, you
                    // can remove all 'authenticationStatus' checks
                    const ready = mounted && authenticationStatus !== "loading";
                    const connected =
                      ready &&
                      account &&
                      chain &&
                      (!authenticationStatus ||
                        authenticationStatus === "authenticated");

                    return (
                      <div
                        {...(!ready && {
                          "aria-hidden": true,
                          style: {
                            opacity: 0,
                            pointerEvents: "none",
                            userSelect: "none",
                          },
                        })}
                      >
                        {(() => {
                          if (!connected) {
                            return (
                              <button
                                className="bg-[#ffc700] px-6 md:px-14 font-bold py-4 rounded-lg text-black easy-in-out duration-300 "
                                onClick={openConnectModal}
                                type="button"
                              >
                                CONNECT
                              </button>
                            );
                          }

                          if (chain.unsupported) {
                            return (
                              <button
                                className="bg-[#ffc700] px-6 md:px-14 font-bold py-4 rounded-lg text-black easy-in-out duration-300 "
                                onClick={openChainModal}
                                type="button"
                              >
                                Wrong network
                              </button>
                            );
                          }

                          return (
                            <div
                              style={{ display: "flex", gap: 12 }}
                              className="bg-[#ffc700] px-2  font-bold py-4 rounded-lg text-black easy-in-out duration-300 "
                            >
                              <button
                                onClick={openChainModal}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                                type="button"
                              >
                                {chain.hasIcon && (
                                  <div
                                    style={{
                                      background: chain.iconBackground,
                                      width: 12,
                                      height: 12,
                                      borderRadius: 999,
                                      overflow: "hidden",
                                      marginRight: 4,
                                    }}
                                  >
                                    {chain.iconUrl && (
                                      <img
                                        alt={chain.name ?? "Chain icon"}
                                        src={chain.iconUrl}
                                        style={{ width: 12, height: 12 }}
                                      />
                                    )}
                                  </div>
                                )}
                                {chain.name}
                              </button>

                              <button onClick={openAccountModal} type="button">
                                {account.displayName}
                                {account.displayBalance
                                  ? ` (${account.displayBalance})`
                                  : ""}
                              </button>
                            </div>
                          );
                        })()}
                      </div>
                    );
                  }}
                </ConnectButton.Custom>{" "}
                <button className="ease-in-out duration-300 w-full max-w-[130px] md:max-w-[200px] py-2 flex items-center  justify-center hover:bg-[#ffffff40] hover:text-[#191924] bg-[#191924] text-[#ffffff40] font-bold text-xl rounded-lg">
                  CLAIM
                </button>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-8 mt-12">
                <div className="flex flex-col text-white items-center">
                  <SocialIcon
                    network="twitter"
                    fgColor="white"
                    url="https://twitter.com/BabyDogeOVision"
                  ></SocialIcon>
                  <div className="pt-2">Twitter - 推特</div>
                </div>
                <div className="flex flex-col text-white items-center">
                  <SocialIcon
                    network="telegram"
                    fgColor="white"
                    url="https://t.me/BabyDogeOriginalVisionEN"
                  ></SocialIcon>
                  <div className="pt-2">Telegram EN</div>
                </div>
                <div className="flex flex-col text-white items-center">
                  <SocialIcon
                    network="discord"
                    fgColor="white"
                    url="https://discord.gg/MNT54SDWbw"
                  ></SocialIcon>
                  <div className="pt-2">Discord</div>
                </div>
                <div className="flex flex-col text-white items-center">
                  <SocialIcon
                    network="github"
                    fgColor="white"
                    url="https://github.com/babydogeoriginalvision"
                  ></SocialIcon>
                  <div className="pt-2">Github</div>
                </div>
               
                <div className="flex flex-col text-white items-center">
                  <SocialIcon
                    network="medium"
                    fgColor="white"
                    url="https://babydogeoriginalvision.com"
                  ></SocialIcon>
                  <div className="pt-2">Medium</div>
                </div>
                <div className="flex flex-col text-white items-center">
                  <Image width={50} src={coingecko}></Image>
                  <div className="pt-2">CoinGecko</div>
                </div>
                <div className="flex flex-col text-white items-center">
                  <SocialIcon
                    network="telegram"
                    fgColor="white"
                    url="https://t.me/BabyDogeOriginalVisionCN"
                  ></SocialIcon>
                  <div className="pt-2">电报信使</div>
                </div>
               
                <div className="flex flex-col text-white items-center">
                  <Image width={50} src={cmc}></Image>
                  <div className="pt-2">CoinMarketCap</div>
                </div>
                <div className="flex flex-col text-white items-center">
                  <Image width={50} src={pancakeswap}></Image>
                  <div className="pt-2">Pancake Swap</div>
                </div>
                <div className="flex flex-col text-white items-center">
                  <Link href="https://bscscan.com/token/0x45bc3cf6bebe58252c3538660a9536052b60dff0">
                  <Image width={50} src={bsc}></Image>
                  <div className="pt-2">Explorer</div></Link>
                </div>
              </div>
              <div className="rounded-lg w-full md:w-1/3 bg-[#191924] p-8 mt-24 text-start font-extralight">
                <div className="text-4xl pb-8 font-bold">The $BDOV Purpose</div>
                Deep in the shadows of the cryptocurrency world, a promise was
                made. A promise that was meant to be a beacon of hope for
                everybody regardless of status. $BABYDOGE began as a dream to
                create a coin for the people, by the people, and without the
                imbalanced power structure of elites who leave the people
                enslaved to their dumping, project after project. The emergence
                of meme tokens promised a new and exciting vision of egalitarian
                access to wealth and community. However, as time passed,
                whispers began to spread amongst the early supporters of Baby
                Doge who were there from the inception. Whispers that brought
                doubt, whispers that spoke of darkness.<br></br>
                <br></br> With each new block mined, the coin’s path began to
                stray further and further from its core mission to bring joy and
                give hope to anyone regardless of pedigree or baggage. The goal
                of Baby Doge was to be the new dawn for so many who were
                suffering in the darkness; unfortunately the true nature of the
                enigmatic leader behind the coin wouldn't allow this dream to be
                realized.
                <br></br>
                <br></br> A dark force took control of $BABYDOGE, using
                obfuscation to hide his real intentions. Rumor has it that this
                dark force held a majority stake in Baby Doge through thousands
                of wallets that were under his control. Jackson abandoned his
                army and failed to ship a meaningful technology roadmap, which
                turned Baby Doge into a perpetual bear market nightmare for
                those who had remained loyal to its original vision and faithful
                to the Jackson cult.<br></br>
                <br></br> A key contributor to the ideation and creation of Baby
                Doge, known only as The Dogfather, never received any
                recognition or reward for his vital contributions from Jackson.
                <br></br>
                <br></br>
                The Dogfather was a key architect in helping Jackson develop the
                community that became Baby Doge. However, Jackson and his two
                evil henchmen didn’t believe in the altruistic goals of the
                Dogfather and seized the opportunity to usurp power and take
                control of the project.<br></br>
                <br></br> It is due to this sacrifice that the Dogfather will
                receive a small amount of $DOV tokens, to pay homage for his
                great contributions early on in the project. For years, the
                truth was hidden deep in the blockchain and that anonymity
                allowed Jackson to play the role of benevolent leader who
                sympathized with the rest of his cohorts, while eventually
                abandoning his army and failing to deliver the Baby Dogerium.
                Jackson and his henchmen erased all of their social media and
                digital footprint in hopes of remaining hidden with their
                buckets of $BABYDOGE. The former friends near them understand
                how Jackson and his two lackeys did not reciprocate back all the
                good deeds paid forward to them from the many good samaritans in
                the land of cryptocurrencies.<br></br>
                <br></br> But now, from the ashes of this once great dream
                arises a new people’s champion who will return power back to
                those who stayed loyal to the core tenets that Baby Doge was
                founded on.<br></br>
                <br></br> Babydoge Original Vision ($BDOV) fixes the corruption
                behind $BABYDOGE by fairly distributing $BDOV to those who
                believe in the genuine Baby Doge community. $BDOV was developed
                by true devotees in the dream that was once Baby Doge. They
                intend on $DOV to be distributed in a manner that is not only
                equitable and righteous but also transparent.<br></br>
                <br></br> In order to establish a truly equitable community, an
                equivalent amount of $BDOV will be dispersed among Baby Doge
                holders who have been active on-chain in the last 6 months days.
                277,000 $BABYDOGE wallets will be eligible for $BDOV, making it
                one of the largest airdrops in crypto history. For holders that
                have $BABYDOGE on centralized exchanges, a dedicated portion of
                the token metrics will be reserved for CEX airdrop and listing
                negotiations, governed by 59 members of the Inu Economic Forum,
                which is made up of Karma DAO OGs.<br></br>
                <br></br> Karma DAO members directly helped with the execution,
                ideation, support and marketing of Baby Doge in the early days
                prior to Jackson’s duplicitous acts against the $BABYDOGE
                community. A portion of the tokens will be granted to Karma DAO
                as well as The Dogfather to pay homage for their contributions
                early on in the project.<br></br>
                <br></br> Distributing $BDOV tokens to the people is the right
                way to honor the Baby Doge community. Baby Doge is not lost –
                the community can be great again and deserves to be given a
                second chance with a coin that has a more fair token
                distribution than Jackson’s Baby Doge.<br></br>
                <br></br> It is time we make the Baby Doge community all it was
                envisioned to be: equal opportunity for everyone. No whales and
                rich people playing games, deceiving the people at the bottom.
                In a nutshell, plain old transparency and fairness. Baby
                Dogerium led the $BABYDOGE community astray. It's time for
                $BDOV.<br></br>
                <br></br> The $BDOV team vows to not let the $BABYDOGE army down
                this time. The $BABYDOGE holders have had enough. $BDOV is here,
                and the bear market pain is almost over.<br></br>
                <br></br> The $BDOV coin icon depicts a Baby Doge rising from
                ashes like a phoenix because from the embers of this once great
                dream $BDOV will resurge stronger and more dedicated than ever
                to the mission.<br></br>
                <br></br>
                The $BDOV team respects BitBoy for bringing light to darkness,
                and helping the army find its new way after Jackson. May a new
                era begin with $BDOV.<br></br>
                <br></br> May we see brighter days, positive changes and greater
                evolution to the Baby Doge story.<br></br>
                <br></br> With love, understanding and new hope for all,
                <br></br> The $BDOV team
              </div>
              <div className="rounded-lg w-full md:w-1/3 bg-[#191924] p-8 mt-24 text-start font-extralight">
                <div className="text-4xl pb-8 font-bold">
                  $BDOV Token Metrics
                </div>
                <div className="pb-8 ">
                  1,000,000,000,000,000 Total $BDOV Supply
                </div>
                <div className="flex items-start justify-between">
                  <div className="flex">
                    <div className="w-3 h-3 rounded-sm bg-red-600 mt-[7px] "></div>
                    <div className="pl-3">%80</div>
                  </div>

                  <div className="w-2/3 flex flex-col">
                    <div className="ml-4 font-semibold">
                      $BABYDOGE Community Airdrop
                    </div>
                    <div className="pl-4">
                      Airdrop to BABYDOGE Inu Community ($BABYDOGE): An equal
                      amount of $BDOV is claimed for each $BABYDOGE wallets that
                      hold 1 $BABYDOGE and have been active in past 6 months
                      onchain from Block 16860452. Airdrop claim window is open
                      for 30 days
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between pt-8">
                  <div className="flex">
                    <div className="w-3 h-3 rounded-sm bg-[#7CFB5C] mt-[7px] "></div>
                    <div className="pl-3">%0.5</div>
                  </div>

                  <div className="w-2/3 flex flex-col">
                    <div className="ml-4 font-semibold">The Dogfather</div>
                    <div className="pl-4">
                      Airdrop to The Dogfather, the secret co-creator of
                      $BABYDOGE ideas but was rugged by Jackson
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between pt-8">
                  <div className="flex">
                    <div className="w-3 h-3 rounded-sm bg-[#7b6ffc] mt-[7px] "></div>
                    <div className="pl-3">%5.5</div>
                  </div>

                  <div className="w-2/3 flex flex-col">
                    <div className="ml-4 font-semibold">Karma DAO Airdrop</div>
                    <div className="pl-4">
                      Airdrop to Karma DAO members, including a bonus airdrop to
                      Karma members that contributed to initial $BDOV liquidity
                      pools
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between pt-8">
                  <div className="flex">
                    <div className="w-3 h-3 rounded-sm bg-[#FFC700] mt-[7px] "></div>
                    <div className="pl-3">%6.5</div>
                  </div>

                  <div className="w-2/3 flex flex-col">
                    <div className="ml-4 font-semibold">
                      Liquidity Pools for Dexes
                    </div>
                    <div className="pl-4">
                      Tokens used for bridges and potential future DEX Liquidity
                      Pools{" "}
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between pt-8">
                  <div className="flex">
                    <div className="w-3 h-3 rounded-sm bg-[#4a99e9] mt-[7px] "></div>
                    <div className="pl-3">%7.5</div>
                  </div>

                  <div className="w-2/3 flex flex-col">
                    <div className="ml-4 font-semibold">
                      CEX Listings and CEX Airdrops
                    </div>
                    <div className="pl-4">
                      Tokens reserved for CEX listings, CEX listing fees and CEX
                      airdrops, governed by leaders in Karma DAO called the Inu
                      Economic Forum{" "}
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center mt-12">
                  <Image
                    src={logo}
                    width={200}
                    className="rounded-full"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
