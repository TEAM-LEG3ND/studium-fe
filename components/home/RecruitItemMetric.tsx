import styles from "@/styles/components/RecruitItem.module.sass";

type RecruitItemMetricProps = {
  metric: string;
};

function RecruitItemMetric({ metric }: RecruitItemMetricProps) {
  return <small className={styles.study_item_metric}>{metric}</small>;
}

export default RecruitItemMetric;
