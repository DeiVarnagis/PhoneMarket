import React from 'react';
import Grid from '@material-ui/core/Grid';
function Upload(props) {
    const { onChange, imagePaths } = props;
    return (
        <Grid container spacing={3}>
            <Grid item lg={6} md={6} xs={12} style={{ padding: '20px' }}>
                <div className="form-group files">
                    <h4>Upload Your files</h4>
                    <input
                        type="file"
                        className="form-control"
                        multiple
                        onChange={onChange}
                    />
                </div>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
                <Grid container spacing={3}>
                    {imagePaths.map((path, index) => (
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xs={12}
                            key={index}
                            className="parent"
                        >
                            <img key={index} alt={index} src={path} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Upload;
