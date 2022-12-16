import React from "react";
import BarChart from "./BarChart";
import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import { DoughnutChart } from "./DoughnutChart";
import AreaChart from "./AreaChart";
import RadarChart from "./RadarChart";

const ChartPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      {" "}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        margin="20px"
      >
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box sx={{ width: "18em", margin: "auto" }}>
            <DoughnutChart />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box sx={{ width: "18em", margin: "auto" }}>
            <PieChart />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box sx={{ width: "18em", margin: "auto" }}>
            <RadarChart />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box height="28vh">
            <LineChart />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box height="28vh">
            <AreaChart />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChartPage;
