import { BOOKMARKS_PATH, STUDIES_PATH, TEMPLATES_PATH } from "@/utils/routes";
import styles from "@/styles/components/MainHeader.module.sass";
import Navigation from "../common/Navigation";

function MainNavigation() {
  const mainNavigationItems = [
    { label: "스터디", route: STUDIES_PATH },
    { label: "템플릿", route: TEMPLATES_PATH },
    { label: "북마크", route: BOOKMARKS_PATH },
  ];

  return (
    <Navigation aria-label="global-navigation-bar" className={styles.gnb}>
      {mainNavigationItems.map(item => (
        <Navigation.Item route={item.route}>{item.label}</Navigation.Item>
      ))}
    </Navigation>
  );
}

export default MainNavigation;
