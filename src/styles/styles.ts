export const openDetailsStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "75%",
  bgcolor: "#15161d",
  border: "2px solid aquamarine",
  borderRadius: "10px",
  boxShadow: 24,
  color: "white",
  p: 2,
  "@media (max-width: 350px)": {
    ".box": {
      gap: 2,
      gridTemplateColumns: "repeat(6, 1fr)",
      gridTemplateRows: "repeat(8, 1fr)",
      gridTemplateAreas: `
      "poster poster poster poster . exit"
      "poster poster poster poster . ."
      "poster poster poster poster . ."
      "poster poster poster poster rating rating"
      "title title title title title title"
      "summary summary summary summary summary summary"
      "actors actors actors actors actors actors"
      "directors directors directors directors directors directors"`,
      ".title": { fontSize: 18, alignSelf: "start", justifySelf: "start" },
      ".rating": { alignSelf: "end", ".rating-child": { fontSize: "100%" } },
      ".summary": { fontSize: 12, alignSelf: "start", justifySelf: "start" },
      ".actors": { fontSize: 12 },
      ".directors": { fontSize: 12 },
      ".exit": { alignSelf: "start", justifySelf: "end" },
    },
  },
  "@media (min-width: 351px)": {
    ".box": {
      gap: 2,
      gridTemplateColumns: "repeat(6, 1fr)",
      gridTemplateRows: "repeat(8, 1fr)",
      gridTemplateAreas: `
      "poster poster poster poster . exit"
      "poster poster poster poster . ."
      "poster poster poster poster . ."
      "poster poster poster poster rating rating"
      "title title title title title title"
      "summary summary summary summary summary summary"
      "actors actors actors actors actors actors"
      "directors directors directors directors directors directors"`,
      ".title": { fontSize: 18, alignSelf: "start", justifySelf: "start" },
      ".rating": { alignSelf: "end", ".rating-child": { fontSize: "100%" } },
      ".summary": { fontSize: 12, alignSelf: "start", justifySelf: "start" },
      ".actors": { fontSize: 12 },
      ".directors": { fontSize: 12 },
      ".exit": { alignSelf: "start", justifySelf: "end" },
    },
  },
  "@media (min-width: 451px)": {
    ".box": {
      gap: 2,
      gridTemplateColumns: "repeat(7, 1fr)",
      gridTemplateRows: "repeat(12, 1fr)",
      gridTemplateAreas: `
      "poster poster poster poster . . exit"
      "poster poster poster poster rating rating rating"
      "poster poster poster poster rating rating rating"
      "poster poster poster poster rating rating rating"
      "poster poster poster poster rating rating rating"
      "poster poster poster poster rating rating rating"
      "poster poster poster poster rating rating rating"
      "title title title title title title title"
      "summary summary summary summary summary summary summary"
      "actors actors actors actors actors actors actors"
      "directors directors directors directors directors directors directors"`,
      ".title": { fontSize: 18, alignSelf: "start", justifySelf: "start" },
      ".rating": { alignSelf: "end", ".rating-child": { fontSize: "150%" } },
      ".summary": { fontSize: 12, alignSelf: "start", justifySelf: "start" },
      ".actors": { fontSize: 12 },
      ".directors": { fontSize: 12 },
      ".exit": { alignSelf: "start", justifySelf: "end" },
    },
  },
  "@media (min-width: 601px)": {
    ".box": {
      gap: 2,
      gridTemplateColumns: "repeat(7, 1fr)",
      gridTemplateRows: "repeat(12, 1fr)",
      gridTemplateAreas: `
      "poster poster poster poster . . exit"
      "poster poster poster poster rating rating rating"
      "poster poster poster poster rating rating rating"
      "poster poster poster poster rating rating rating"
      "poster poster poster poster rating rating rating"
      "poster poster poster poster rating rating rating"
      "poster poster poster poster rating rating rating"
      "poster poster poster poster rating rating rating"
      "title title title title title title title"
      "summary summary summary summary summary summary summary"
      "actors actors actors actors actors actors actors"
      "directors directors directors directors directors directors directors"`,
      ".title": { fontSize: 24, alignSelf: "start", justifySelf: "start" },
      ".rating": {
        alignSelf: "end",
        justifySelf: "start",
        ".rating-child": { fontSize: "150%" },
      },
      ".summary": { fontSize: 12, alignSelf: "start", justifySelf: "start" },
      ".actors": { fontSize: 12 },
      ".directors": { fontSize: 12 },
      ".exit": { alignSelf: "start", justifySelf: "end" },
    },
  },
  "@media (min-width: 751px)": {
    ".box": {
      gridTemplateColumns: "repeat(10, 1fr)",
      gridTemplateRows: "repeat(7, 1fr)",
      gridTemplateAreas: `"poster poster poster poster title title title title title exit"
      "poster poster poster poster title title title title title exit"
      "poster poster poster poster rating rating rating rating rating rating"
      "poster poster poster poster rating rating rating rating rating rating"
      "summary summary summary summary summary summary summary summary summary summary"
      "actors actors actors actors actors actors actors actors actors actors"
      "directors directors directors directors directors directors directors directors directors directors"`,
      ".title": { fontSize: 36, alignSelf: "start", justifySelf: "start" },
      ".rating": {
        alignSelf: "end",
        justifySelf: "start",
        ".rating-child": { fontSize: "200%" },
      },
      ".summary": { fontSize: 18, alignSelf: "start", justifySelf: "start" },
      ".actors": { fontSize: 14 },
      ".directors": { fontSize: 14 },
    },
  },
  "@media (min-width: 901px)": {
    ".box": {
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "repeat(7, 1fr)",
      gridTemplateAreas: `"poster poster poster poster poster title title title title title title exit"
      "poster poster poster poster poster title title title title title title exit"
      "poster poster poster poster poster rating rating rating rating rating rating rating"
      "poster poster poster poster poster rating rating rating rating rating rating rating"
      "summary summary summary summary summary summary summary summary summary summary summary summary"
      "actors actors actors actors actors actors actors actors actors actors actors actors"
      "directors directors directors directors directors directors directors directors directors directors directors directors"`,
      ".title": { fontSize: 48, alignSelf: "start", justifySelf: "start" },
      ".rating": {
        alignSelf: "end",
        justifySelf: "start",
        ".rating-child": { fontSize: "250%" },
      },
      ".summary": { fontSize: 20, alignSelf: "start", justifySelf: "start" },
      ".actors": { fontSize: 14 },
      ".directors": { fontSize: 14 },
    },
  },
  "@media (min-width: 1101px)": {
    ".box": {
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "repeat(7, 1fr)",
      gridTemplateAreas: `
        "poster poster poster poster poster title title title title title title exit"
        "poster poster poster poster poster title title title title title title exit"
        "poster poster poster poster poster rating rating rating rating rating rating rating"
        "poster poster poster poster poster summary summary summary summary summary summary summary"
        "poster poster poster poster poster summary summary summary summary summary summary summary"
        "actors actors actors actors actors actors actors actors actors actors actors actors"
        "directors directors directors directors directors directors directors directors directors directors directors directors"`,
      ".title": { fontSize: 58, alignSelf: "start", justifySelf: "start" },
      ".summary": { fontSize: 18, alignSelf: "start", justifySelf: "start" },
      ".actors": { fontSize: 16 },
      ".directors": { fontSize: 16 },
    },
  },
  "@media (min-width: 1301px)": {
    ".box": {
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "repeat(7, 1fr)",
      gridTemplateAreas: `
        "poster poster poster poster title title title title title title title exit"
        "poster poster poster poster title title title title title title title exit"
        "poster poster poster poster rating rating rating rating rating rating rating rating"
        "poster poster poster poster summary summary summary summary summary summary summary summary"
        "poster poster poster poster summary summary summary summary summary summary summary summary"
        "actors actors actors actors actors actors actors actors actors actors actors actors"
        "directors directors directors directors directors directors directors directors directors directors directors directors"`,
      ".title": { fontSize: 58, alignSelf: "start", justifySelf: "start" },
      ".summary": { fontSize: 18, alignSelf: "start", justifySelf: "start" },
      ".actors": { fontSize: 16 },
      ".directors": { fontSize: 16 },
    },
  },
};

export const appStyle = {
  color: "#ffffff",
  fontFamily: "'Raleway', sans-serif, Roboto",
  width: "100%",
};

export const appGridContainerStyle = {
  fontSize: "inherit",
  "@media (max-width: 700px)": {
    ".box": {
      ".movie-list": {
        mt: 10,
        fontSize: 48,
      },
    },
  },
  "@media (min-width: 701px)": {
    ".box": {
      ".movie-list": {
        mt: 10,
        fontSize: 80,
      },
    },
  },
  "@media (min-width: 1101px)": {
    ".box": {
      ".movie-list": {
        mt: 10,
        fontSize: 120,
      },
    },
  },
};

export const searchBarStyle = {
  width: "90%",
  padding: "14px 20px 16px",
  borderRadius: "5px",
  border: "solid 1px white",
  backgroundColor: "rgba(255, 255, 255, .13)",
  color: "white",
  fontSize: "1.5em",
  fontFamily: "inherit",
  "&:focus": {
    border: "solid 1px aquamarine",
  },
};

export const logoStyle = {
  boxShadow: "0px 0px 5px 1px #ccc",
  borderRadius: "5px",
  height: "100%",
  width: "100%",
};

export const posterStyle = {
  boxShadow: "0px 0px 10px 1px #ccc",
  borderRadius: "5px",
  height: "100%",
  width: "100%",
};

export const movieStyle = {
  borderBottom: "solid 1px aquamarine",
  borderRadius: 0,
  background: "#15161d",
  "&:hover": {
    background: "rgba(255, 255, 255, .13)",
  },
  height: "100%",
  color: "white",
  "@media (max-width: 450px)": {
    ".box": {
      gridTemplateColumns: "repeat(6, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      gridTemplateAreas: `"logo logo logo title title actions"
      "logo logo logo title title actions"`,
      ".logo": { m: 1 },
      ".title": { fontSize: "30px", alignSelf: "start", justifySelf: "start" },
      ".actions": { alignSelf: "end", justifySelf: "end", pb: 2, pr: 2 },
    },
  },
  "@media (min-width: 451px)": {
    ".box": {
      gridTemplateColumns: "repeat(8, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      gridTemplateAreas: `"logo logo logo title title title title title"
        "logo logo logo actions actions actions actions actions"`,
      ".title": { fontSize: "40px", alignSelf: "start", justifySelf: "start" },
      ".actions": { alignSelf: "end", justifySelf: "end", mb: 2, mr: 2 },
    },
  },
  "@media (min-width: 601px)": {
    ".box": {
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      gridTemplateAreas: `"logo logo logo title title title title title title title title title"
      "logo logo logo actions actions actions actions actions actions actions actions actions"`,
      ".title": { fontSize: "40px", alignSelf: "start", justifySelf: "start" },
      ".actions": { alignSelf: "end", justifySelf: "end" },
    },
  },
  "@media (min-width: 751px)": {
    ".box": {
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      gridTemplateAreas: `"logo logo logo title title title title title title title title title"
      "logo logo logo actions actions actions actions actions actions actions actions actions"`,
      ".title": { fontSize: "45px", alignSelf: "start", justifySelf: "start" },
      ".actions": { alignSelf: "end", justifySelf: "end" },
    },
  },
  "@media (min-width: 901px)": {
    ".box": {
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      gridTemplateAreas: `"logo logo title title title title title title title title title title"
      "logo logo actions actions actions actions actions actions actions actions actions actions"`,
      ".title": { fontSize: "50px", alignSelf: "start", justifySelf: "start" },
      ".actions": { alignSelf: "end", justifySelf: "end" },
    },
  },
  "@media (min-width: 1101px)": {
    ".box": {
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      gridTemplateAreas: `"logo logo title title title title title title title title title title"
        "logo logo actions actions actions actions actions actions actions actions actions actions"`,
      ".title": { fontSize: "30%", alignSelf: "center", justifySelf: "start" },
      ".actions": { alignSelf: "end", justifySelf: "end" },
      // ".logo":{m:0, ml:1}
    },
  },
  "@media (min-width: 1301px)": {
    ".box": {
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      gridTemplateAreas: `"logo logo title title title title title title title title title title"
        "logo logo actions actions actions actions actions actions actions actions actions actions"`,
      ".title": { fontSize: "40%", alignSelf: "start", justifySelf: "start" },
      ".actions": { alignSelf: "end", justifySelf: "end" },
    },
  },
};
