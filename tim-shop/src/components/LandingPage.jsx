import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import CategoryIcon from "@material-ui/icons/Category";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ContactsIcon from "@material-ui/icons/Contacts";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import userService from "./../services/UserService";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/products" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <ShoppingBasketIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="My Cart" />
        </ListItem>
        <Link to="/contact-us" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <ContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItem>
        </Link>
        {!userService.isLoggedIn() && (
          <>
            <Link to="/login" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText primary="Log In" />
              </ListItem>
            </Link>
            <Link to="/register" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Register" />
              </ListItem>
            </Link>
          </>
        )}
      </List>
      <Divider />
      <List></List>
    </div>
  );
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2", // "light1", "dark1", "dark2"
    title: {
      text: "Trip Expenses",
    },
    data: [
      {
        type: "pie",
        indexLabel: "{label}: {y}%",
        startAngle: -90,
        dataPoints: [
          { y: 20, label: "Airfare" },
          { y: 24, label: "Food & Drinks" },
          { y: 20, label: "Accomodation" },
          { y: 14, label: "Transportation" },
          { y: 12, label: "Activities" },
          { y: 10, label: "Misc" },
        ],
      },
    ],
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <LocalMallIcon />
            <Typography variant="h4" display="inline">
              My Shopping Mart
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Chart
          width={"100%"}
          height={"500px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Task", "Hours per Day"],
            ["Samsung", 11],
            ["OppO", 2],
            ["Toshiba", 2],
            ["Motorolla", 2],
            ["iPhone", 7],
          ]}
          options={{
            title: "Our Products Worldwide Demand",
            // Just add this option
            is3D: true,
          }}
          rootProps={{ "data-testid": "2" }}
        />
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              { type: "number", label: "x" },
              { type: "number", label: "values" },
              { id: "i0", type: "number", role: "interval" },
              { id: "i1", type: "number", role: "interval" },
              { id: "i2", type: "number", role: "interval" },
              { id: "i2", type: "number", role: "interval" },
              { id: "i2", type: "number", role: "interval" },
              { id: "i2", type: "number", role: "interval" },
            ],
            [1, 100, 90, 110, 85, 96, 104, 120],
            [2, 120, 95, 130, 90, 113, 124, 140],
            [3, 130, 105, 140, 100, 117, 133, 139],
            [4, 90, 85, 95, 85, 88, 92, 95],
            [5, 70, 74, 63, 67, 69, 70, 72],
            [6, 30, 39, 22, 21, 28, 34, 40],
            [7, 80, 77, 83, 70, 77, 85, 90],
            [8, 100, 90, 110, 85, 95, 102, 110],
          ]}
          options={{
            title: "Sales Chart (Down Peak because of COVID-19)",
            curveType: "function",
            intervals: { color: "series-color" },
            interval: {
              i0: {
                color: "#4374E0",
                style: "bars",
                barWidth: 0,
                lineWidth: 4,
                pointSize: 10,
                fillOpacity: 1,
              },
              i1: {
                color: "#E49307",
                style: "bars",
                barWidth: 0,
                lineWidth: 4,
                pointSize: 10,
                fillOpacity: 1,
              },
              i2: { style: "area", curveType: "function", fillOpacity: 0.3 },
            },
            legend: "none",
          }}
          rootProps={{ "data-testid": "8" }}
        />
        <h2> Its Usage In The World</h2>
        <Chart
          width={"100%"}
          height={"500px"}
          chartType="GeoChart"
          data={[
            ["Country", "Latitude"],
            ["Algeria", 36],
            ["Angola", -8],
            ["Benin", 6],
            ["Botswana", -24],
            ["Burkina Faso", 12],
            ["Burundi", -3],
            ["Cameroon", 3],
            ["Canary Islands", 28],
            ["Cape Verde", 15],
            ["Central African Republic", 4],
            ["Ceuta", 35],
            ["Chad", 12],
            ["Comoros", -12],
            ["Cote d'Ivoire", 6],
            ["Democratic Republic of the Congo", -3],
            ["Djibouti", 12],
            ["Egypt", 26],
            ["Equatorial Guinea", 3],
            ["Eritrea", 15],
            ["Ethiopia", 9],
            ["Gabon", 0],
            ["Gambia", 13],
            ["Ghana", 5],
            ["Guinea", 10],
            ["Guinea-Bissau", 12],
            ["Kenya", -1],
            ["Lesotho", -29],
            ["Liberia", 6],
            ["Libya", 32],
            ["Madagascar", null],
            ["Madeira", 33],
            ["Malawi", -14],
            ["Mali", 12],
            ["Mauritania", 18],
            ["Mauritius", -20],
            ["Mayotte", -13],
            ["Melilla", 35],
            ["Morocco", 32],
            ["Mozambique", -25],
            ["Namibia", -22],
            ["Niger", 14],
            ["Nigeria", 8],
            ["Republic of the Congo", -1],
            ["Réunion", -21],
            ["Rwanda", -2],
            ["Saint Helena", -16],
            ["São Tomé and Principe", 0],
            ["Senegal", 15],
            ["Seychelles", -5],
            ["Sierra Leone", 8],
            ["Somalia", 2],
            ["Sudan", 15],
            ["South Africa", -30],
            ["South Sudan", 5],
            ["Swaziland", -26],
            ["Tanzania", -6],
            ["Togo", 6],
            ["Tunisia", 34],
            ["Uganda", 1],
            ["Western Sahara", 25],
            ["Zambia", -15],
            ["Zimbabwe", -18],
          ]}
          options={{
            region: "002", // Africa
            colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
            backgroundColor: "#81d4fa",
            datalessRegionColor: "#f8bbd0",
            defaultColor: "#f5f5f5",
          }}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="YOUR_KEY_HERE"
          rootProps={{ "data-testid": "4" }}
        />
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
