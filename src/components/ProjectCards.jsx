import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FiGithub } from "react-icons/fi";
import trilogy from "../assets/trilogy.png";
import tradeez from "../assets/tradeez.png";
import musicale from "../assets/musicale.png";
import auxilium from "../assets/auxilium.png";
import miniq from "../assets/miniq.png";
import dinein from "../assets/dinein.png";
import { RevealFromBtm } from "../components/RevealFromBtm";

const projects = [
  {
    name: "DineIn",
    image: dinein,
    description: "[WIP] Organise your kitchen.",
    github: "https://github.com/nnxiwu/dinein",
    technologies: ["Next.js", "Express.js", "Supabase"],
  },
  {
    name: "Personalized AI Thumbnail Generator",
    description: "An end-to-end pipeline for personalized thumbnail generation using generative AI.",
    technologies: ["Python", "React.js", "Hugging Face"],
  },
  {
    name: "Mini-Q",
    image: miniq,
    description: "A collection tool to tell your health professional what information you require about your medication",
    technologies: ["React.js", "PostgreSQL", "AWS"],
  },
  {
    name: "Trilogy Tutoring",
    image: trilogy,
    description: "A website for a small tutoring startup",
    technologies: ["React.js", "Firebase"],
    github: "https://github.com/nancywu45/trilogy-tutoring",
  },
  {
    name: "TradeEz",
    image: tradeez,
    description: "A platform to connect everyday people with tradies for everyday needs",
    technologies: ["React.js", "Firebase"],
    github: "https://github.com/nancywu45/TradeEz",
  },
  {
    name: "Musicale",
    image: musicale,
    description: "A spotify-like webapp for searching and saving music",
  },
  {
    name: "Auxilium",
    image: auxilium,
    description: "A beginner-friendly Q&A forum for junior developers",
  },
];

export default function ProjectCards() {
  const theme = createTheme({
    typography: { fontFamily: ["Fira Code"] },
    palette: {
      primary: { main: "#3d5634" },
      secondary: { main: "#507045" },
      background: { default: "#DFE5DC" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="grid auto-rows-fr grid-cols-1 gap-6 pt-3 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <RevealFromBtm key={project.name} delay={0.5 + (index % 3) * 0.15} duration={1}>
            <Card
              className="font-code"
              sx={{
                width: "100%",
                height: "100%",
                minHeight: 360,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#DFE5DC",
              }}
            >
              {project.image ? (
                <CardMedia
                  component="img"
                  sx={{ height: 160, objectFit: "cover", flexShrink: 0 }}
                  image={project.image}
                  alt={`${project.name} project preview`}
                />
              ) : (
                <div className="flex h-[160px] shrink-0 items-center justify-center bg-green px-6 text-center font-code text-xl text-grey">
                  {project.name}
                </div>
              )}
              <CardContent sx={{ flexGrow: 1, px: 2.5, py: 1.5 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h3"
                  color="primary"
                  fontWeight="bold"
                  align="center"
                  sx={{
                    lineHeight: 1.35,
                  }}
                >
                  {project.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ minHeight: 56, mt: "auto", px: 2, gap: 0.5, flexWrap: "wrap" }}>
                {project.github && (
                  <Button
                    component="a"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    size="medium"
                    color="primary"
                  >
                    <FiGithub />
                  </Button>
                )}
                {project.technologies?.map((technology) => (
                  <Typography key={technology} variant="body2" color="text.secondary">
                    {technology}
                  </Typography>
                ))}
              </CardActions>
            </Card>
          </RevealFromBtm>
        ))}
      </div>
    </ThemeProvider>
  );
}
