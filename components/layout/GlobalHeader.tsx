import Link from "next/link";

import styles from "@/styles/components/MainHeader.module.sass";
import { HOME_PATH } from "@/utils/routes";
import Logo from "../common/icon/Logo";
import GNB from "./GNB";
import GlobalAddon from "./GlobalAddon";

function MainHeader() {
  return (
    <header className={styles.mainHeader}>
      <div>
        <Link href={HOME_PATH}>
          <Logo className={styles.homeLogo} />
        </Link>
      </div>
      <GNB />
      <GlobalAddon />
    </header>
  );
}

export default MainHeader;