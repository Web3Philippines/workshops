import {
  MediaRenderer,
  useMarketplace,
  useNetwork,
  useNetworkMismatch,
  useListing,
  ChainId,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import marketplaceAddress from "../../config.json";

const ListingPage: NextPage = () => {
  const router = useRouter();
  const [button, setButton] = useState("Purchase");
  const [clickable, setClickable] = useState(true);
  const { listingId } = router.query as { listingId: string };

  const networkMismatch = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  const marketplace = useMarketplace(
    marketplaceAddress.contract
  );

  const { data: listing, isLoading: loadingListing } = useListing(
    marketplace,
    listingId
  );

  if (loadingListing) {
    return <div className={styles.loadingOrError}>📦 Loading...</div>;
  }

  if (!listing) {
    return <div className={styles.loadingOrError}>Listing not found</div>;
  }

  async function buyNft() {
    setClickable(false);
    try {
      if (networkMismatch) {
        switchNetwork && switchNetwork(ChainId.Mumbai);
        return;
      }

      setButton("Please wait...");

      await marketplace?.buyoutListing(listingId, 1);
      alert("NFT purchase successfully!");
      router.push(`/`);
    } catch (error) {
      setClickable(true);
      setButton("Try again 😢");
      console.error(error);
      alert(error);
    }
  }

  return (
    <div className={styles.container} style={{}}>
      <div className={styles.listingContainer}>
        <div className={styles.leftListing}>
          <MediaRenderer
            src={listing.asset.image}
            className={styles.mainNftImage}
          />
        </div>

        <div className={styles.rightListing}>
          <h1>{listing.asset.name}</h1>
          <p>
            Owned by{" "}
            <b>
              {listing.sellerAddress?.slice(0, 6) +
                "..." +
                listing.sellerAddress?.slice(36, 40)}
            </b>
          </p>

          <h2>
            <b>{listing.buyoutCurrencyValuePerToken.displayValue}</b>{" "}
            {listing.buyoutCurrencyValuePerToken.symbol}
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              alignItems: "center",
            }}
          >
            <button
              style={{ 
                borderStyle: "none",
                pointerEvents: clickable ? "auto" : "none",
                opacity: clickable ? 1 : 0.5
              }}
              className={styles.mainButton}
              onClick={buyNft}
            >
              {button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
