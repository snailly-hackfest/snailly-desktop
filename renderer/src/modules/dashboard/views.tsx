import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  ResponsiveContainer,
  Sector,
} from "recharts";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";

import { LoadingIcon, Globe, BadFace, SmileFace } from "@/assets";
import { Table, Card, Button, Modal } from "@/components";
import { Paragraph } from "@/typography";
import { getFormattedDateIndonesia } from "@/utils/formateDate";

import { DashboardViewsProps } from "./types";
import {
  sTableLeft,
  sTableLink,
  sDashboardContent,
  sDashboardLoading,
  sDashboardNoLogActivity,
  sDashboardCardSection,
  sDashboardHeader,
  sDashboardTable,
  sDashboardChart,
  sDashboardChartHeader,
  sDashboardPie,
  sDashboardViz,
  sDatePickerPieChart,
  sDashboardButtonLock,
  sActionButton,
  sLogDeleteButton,
  sLogModalButton,
} from "./styles";
import { calculateGoodPercentage, getStatusComponent } from "./helpers";
import { LockClosed, LockOpen } from "@/assets/lockaccess";

const DashboardViews = ({
  isLoading,
  linkOpenHandler,
  logActivity,
  listOfSummary,
  listStatisticYear,
  listStatisticMonth,
  date,
  year,
  logId,
  grantAccess,
  setLogId,
  setGrantAccess,
  url,
  dateChangeHandler,
  yearChangeHandler,
  updateGrantAccess,
  openEditModalHandler,
  closeEditModalHandler,
  isEditModalOpen,
}: DashboardViewsProps) => {
  console.log(logId);
  const dataYear = listStatisticYear.map((item) => {
    return {
      month: item.month,
      Good: item.Good,
      Bad: item.Bad,
    };
  });

  const dataMonth = listStatisticMonth.map((item) => {
    return {
      name: item.name,
      value: item.name === "Good" && item.value === 0 ? 1 : item.value,
      fill: item.name === "Good" ? "#FFBC57" : "#FF5757",
    };
  });

  const renderPieChartLabel = (props) => {
    const { cx, cy } = props;
    return (
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill="#fff"
        fontSize={32}
        fontWeight={700}
      >
        {props.name === "Good" ? `${calculateGoodPercentage(dataMonth)}%` : ""}
      </text>
    );
  };

  const handleToggleLogId = (logId: string) => {
    setLogId(logId);
    // setGrantAccess(!grantAccess);
    console.log(grantAccess);
  };

  return (
    <>
      <Modal
        size="small"
        title={
          grantAccess === false
            ? "Apakah Anda yakin untuk mengunci situs web ini?"
            : "Apakah Anda yakin untuk membuka situs web ini?"
        }
        isOpen={isEditModalOpen}
        onClose={closeEditModalHandler}
        isGrantAccessType={true}
        name={url}
      >
        <form onSubmit={updateGrantAccess}>
          <div className={sLogModalButton}>
            <Button
              variant="tertiary"
              onClick={closeEditModalHandler}
              className={sLogDeleteButton}
            >
              Batal
            </Button>
            <Button type="submit" className={sLogDeleteButton}>
              Ya
            </Button>
          </div>
        </form>
      </Modal>
      {isLoading ? (
        <div className={sDashboardLoading}>
          <LoadingIcon size="s" />
        </div>
      ) : (
        <div className={sDashboardContent}>
          <section className={sDashboardCardSection}>
            <Card title="Total Konten yang Diakses" icon={<Globe />}>
              {listOfSummary["totalSafeWebsites"] +
                listOfSummary["totalDangerousWebsites"]}
            </Card>
            <Card
              title="Total Konten Positif"
              icon={<SmileFace />}
              variant="positive"
            >
              {listOfSummary["totalSafeWebsites"]}
            </Card>
            <Card
              title="Total Konten Negatif"
              icon={<BadFace />}
              variant="negative"
            >
              {listOfSummary["totalDangerousWebsites"]}
            </Card>
          </section>

          <div className={sDashboardViz}>
            <div className={sDashboardChart}>
              <div className={sDashboardChartHeader}>
                <Paragraph variant="l" weight="semibold">
                  Statistik Akses Konten
                </Paragraph>
                <DatePicker
                  views={["year"]}
                  label="Pilih Tahun"
                  onChange={yearChangeHandler}
                  value={moment(year)}
                />
              </div>

              <ResponsiveContainer width="99%" height={400}>
                <BarChart data={dataYear}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="month"
                    dy={30}
                    height={70}
                    tickFormatter={(tick) => tick.substring(0, 3)}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend
                    verticalAlign="top"
                    wrapperStyle={{ lineHeight: "40px" }}
                  />
                  <Bar dataKey="Baik" fill="#4E773F" />
                  <Bar dataKey="Buruk" fill="#FF5757" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className={sDashboardPie}>
              <Paragraph variant="l" weight="semibold" white>
                Persentase Bulanan
              </Paragraph>
              <DatePicker
                views={["month", "year"]}
                label="Pilih Bulan"
                className={sDatePickerPieChart}
                onChange={dateChangeHandler}
                value={moment(date)}
              />
              <PieChart width={170} height={250}>
                <Legend
                  verticalAlign="top"
                  formatter={(value, _entry, _payload) => (
                    <span style={{ color: "#fff" }}>{value}</span>
                  )}
                />
                <Pie
                  data={dataMonth}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  labelLine={false}
                  label={renderPieChartLabel}
                  style={{ outline: "none" }}
                />
              </PieChart>
              <Paragraph variant="m" white>
                Anak anda mengakses {calculateGoodPercentage(dataMonth)}% konten
                positif
              </Paragraph>
            </div>
          </div>

          <div className={sDashboardTable}>
            <Paragraph variant="l" weight="semibold">
              Aktifitas Terbaru
            </Paragraph>
            <Table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>URL</th>
                  <th>Tanggal</th>
                  <th>Nama Anak</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {logActivity?.items.map((item, index) => {
                  // const title = new URL(item.url).hostname;
                  console.log(item.grant_access);
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td
                        onClick={() => linkOpenHandler(item.url)}
                        className={sTableLeft}
                      >
                        <p className={sTableLink}>
                          {item.url ? item.url : "unknown"}
                        </p>
                      </td>
                      <td>{getFormattedDateIndonesia(item.createdAt)}</td>
                      <td>{item.child.name}</td>
                      <td>{getStatusComponent(item)}</td>
                      <td>
                        <span className={sActionButton}>
                          <Button
                            type="submit"
                            className={sDashboardButtonLock}
                            onClick={() => {
                              (item.grant_access !== null ||
                                item.classified_url["FINAL_label"] !== null) &&
                                openEditModalHandler(
                                  item.log_id,
                                  item.grant_access,
                                  item.url
                                );
                            }}
                          >
                            {item.grant_access !== null ? (
                              item.grant_access == true ? (
                                <LockOpen />
                              ) : (
                                <LockClosed />
                              )
                            ) : (
                              <LockClosed /> // Default jika grant_access tidak terdefinisi
                            )}{" "}
                          </Button>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            {logActivity?.items.length === 0 && (
              <div className={sDashboardNoLogActivity}>
                <p>Tidak Ada Aktivitas Log yang Tersedia</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardViews;
