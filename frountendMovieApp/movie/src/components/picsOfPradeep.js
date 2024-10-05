import React from 'react';
import { Grid } from '@mui/material'; // Import Material-UI Grid

export default function Pradeep() {
  return (
    <Grid container spacing={2}>
      {/* Grid for Image 1 */}
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <img src="/pictures/gg.png" alt="not appeared" width="100%" />
      </Grid>

      {/* Grid for Image 2 */}
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <img src="/pictures/1.png" alt="not visualised" width="100%" />
      </Grid>

      {/* Grid for Image 3 */}
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <img src="/pictures/3.png" alt="not visualised" width="100%" />
      </Grid>

      {/* Grid for Image 4 */}
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <img src="/pictures/4.png" alt="not visualised" width="100%" />
      </Grid>

      {/* Grid for Image 5 */}
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <img src="/pictures/5.png" alt="not visualised" width="100%" />
      </Grid>

      {/* Grid for Image 6 */}
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <img src="/pictures/6.png" alt="not visualised" width="100%" />
      </Grid>

      {/* Grid for Image 7 */}
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <img src="/pictures/6.png" alt="not visualised" width="100%" />
      </Grid>
    </Grid>
  );
}
