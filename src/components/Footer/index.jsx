import { parentVariants, transition } from "@/animation/transition";
import useDB from "@/hooks/useDB";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TextMask from "../TextMask";
import KeluargaBesar from "./KeluargaBesar";

/**
 * Text variant
 */
const textVariants = {
  hidden: {
    opacity: 0,
    y: "80%",
    skewY: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Divider variant
 */
const dividerVariants = {
  hidden: {
    scaleX: 0,
    originX: 0.5,
  },
  show: {
    scaleX: 1,
    originX: 0.5,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Footer component
 */
const Footer = () => {
  const { pria, wanita } = useDB((db) => db.wedding.mempelai);
  const doaRestu = "Your prayers and blessings mean a lot to us.";
  const berbahagia = "We, the happy couple";

  return (
    <Box
      component={motion.div}
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true }}
      py={10}
    >
      <Container>
        <Grid
          container
          spacing={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontFamily: "Arizonia" }}
            >
              {doaRestu.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>
          </Grid>

          <Grid item xs={12} mb={5}>
            <Divider
              sx={{ my: 5 }}
              component={motion.div}
              variants={dividerVariants}
            >
              <FavoriteTwoToneIcon sx={{ fontSize: 50 }} />
            </Divider>

            <Typography
              variant="h2"
              sx={{ textAlign: "center", fontFamily: "Arizonia" }}
            >
              {berbahagia.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>
          </Grid>

          {/* Groom */}
          <Grid item md={6} xs={12}>
            <KeluargaBesar
              title="Groom"
              orangTuaPria={pria.orangTua.pria}
              orangTuaWanita={pria.orangTua.wanita}
            />
          </Grid>

          {/* Bride */}
          <Grid item md={6} xs={12} sx={{ mt: { md: 0, xs: 5 } }}>
            <KeluargaBesar
              title="Bride"
              orangTuaPria={wanita.orangTua.pria}
              orangTuaWanita={wanita.orangTua.wanita}
            />
          </Grid>

          {/* Modified by line */}
          <Grid item xs={12} mt={4} mb={2}>
            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                fontSize: 14,
                color: "#fff", // white text
              }}
            >
              Modified by{" "}
              <a
                href="https://instagram.com/cyber.naveen.info"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff", // white link
                  textDecoration: "none",
                  fontFamily: "'Courier New', monospace", // custom font
                }}
              >
                @cyber.naveen.info
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
