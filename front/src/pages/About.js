import { Container, Typography } from "@mui/material";
import krisImage from "../components/images/kris_forreal.jpg";
import katiImage from "../components/images/raudseltKati.jpg";
import Layout from "./Layout.js";

const About = () => {
  return (
    <Container
      sx={{
        position: "absolute",
        top: "0",
        left: "-20px",
        margin: "0",
        padding: "0",
        border: "0",
      }}
    >
      <Layout></Layout>
      <Container
        sx={{
          display: "absolute",
          marginLeft: "320px",
          marginTop: "50px",
          padding: "10px",
          width: "80%",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <h1>About page!</h1>
        <Typography fontSize={"1.2em"} color="black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          libero magna, rutrum non tellus a, euismod varius dui. Sed at laoreet
          nisi. Ut vel augue eleifend, cursus neque ac, pretium leo. Nullam
          tellus orci, auctor nec mollis eget, accumsan id arcu. Aliquam
          tristique finibus massa, quis pharetra nisl semper quis. Duis iaculis,
          purus euismod mollis lacinia, felis mi placerat nunc, non interdum
          ligula risus quis libero. Curabitur lorem augue, gravida eget nisi id,
          pellentesque cursus dolor. Ut iaculis, enim ac bibendum porta, magna
          metus eleifend mi, in finibus felis augue id turpis. Maecenas ac
          congue tellus. Integer at interdum tellus, nec suscipit turpis.
          <br></br>
          <br></br>
          Aenean enim odio, viverra et leo at, viverra placerat sem. Donec
          dapibus dui vitae turpis aliquam, id hendrerit purus gravida. Aenean
          rutrum viverra mi rutrum dignissim. Aliquam bibendum maximus nisi, eu
          consequat ex malesuada quis. Vestibulum vel commodo urna. Quisque
          sodales turpis eget arcu condimentum rhoncus. Praesent a ultrices
          enim, non euismod arcu.
          <br></br>
          <br></br>
          Quisque eu sem et nisl eleifend ullamcorper. Maecenas nec malesuada
          diam. Aliquam eleifend volutpat nulla vel accumsan. Aenean porta
          vehicula purus nec vestibulum. Ut at ex ipsum. Sed pellentesque elit
          pulvinar, pharetra dolor laoreet, rutrum ante. Aenean mollis pretium
          posuere. Nullam vulputate imperdiet facilisis. Vestibulum condimentum
          dignissim odio, nec vestibulum lorem ornare in. Donec feugiat enim
          porttitor, dictum massa eu, sodales sapien. Fusce id hendrerit sapien,
          a placerat enim. Phasellus quis cursus nisl. Nullam sit amet porttitor
          nunc, nec elementum erat. Sed vel lectus posuere, condimentum est ut,
          efficitur nunc.
        </Typography>

        <h1>Contact info</h1>
        <Container sx={{ marginTop: "60px", display: "flex" }}>
          <Container
            sx={{
              backgroundImage: `url(${krisImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              width: "500px",
              height: "300px",
              marginRight: "20px",
            }}
          ></Container>
          <Typography fontSize={"1.5vw"} color="black">
            Kristo is a software engineer with 300 years of experience
            <br />
            E-mail: relk@hot.ee <br />
            LinkedIn: www.mingiasi.ee/Kristo <br />
          </Typography>
        </Container>
        <hr></hr>

        <Container
          sx={{ marginTop: "60px", marginBottom: "60px", display: "flex" }}
        >
          <Container
            sx={{
              backgroundImage: `url(${katiImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              width: "500px",
              height: "500px",
              marginRight: "20px",
            }}
          ></Container>
          <Typography fontSize={"1.5vw"} color="black">
            Kati is a software engineer with 300 years of experience
            <br />
            E-mail: Kati@hot.ee <br />
            LinkedIn: www.mingiasi.ee/Kati <br />
          </Typography>
        </Container>
      </Container>
    </Container>
  );
};

export default About;
