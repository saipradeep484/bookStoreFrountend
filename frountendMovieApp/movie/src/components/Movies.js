import { Button, Stack } from "@mui/material";

export default function Movies() {
  return (
   
    <Stack direction={"row"} spacing={9}>
      <Button href="https://www.youtube.com/watch?v=TrUxDx3u2OU"> 
        <img src={"gopichand/oxygen.png"} alt="oxygen movie" width="250" height="200" />
      </Button>
      <Button href="https://www.youtube.com/watch?v=AC9pV6mHpVg">
        <img src={"gopichand/Loukyam_poster.png"} alt="loukyam movie" width="150" height="200" />
      </Button>
      <Button href="https://www.youtube.com/watch?v=0mUcB56OOZI">
        <img src={"gopichand/chanakya.png"} alt="chanakya movie" width="250" height="200" />
      </Button>
      <Button href="https://www.youtube.com/watch?v=Z7JkBGg9LQ0">
        <img src={"gopichand/sahaasam.png"} alt="sahaasam movie" width="150" height="200" />
      </Button>
      <Button href="https://www.youtube.com/watch?v=tb5adVPHR2I">
        <img src={"gopichand/seetimarr.png"} alt="seetimarr movie" width="150" height="200" />
      </Button>
      <Button href="https://www.youtube.com/watch?v=MeU4E9z5_4o">
        <img src={"/gopichand/gowthamNanda.png"} alt="gowtham nanda movie" width="150" height="200" />
      </Button>
      </Stack>
  );
}
