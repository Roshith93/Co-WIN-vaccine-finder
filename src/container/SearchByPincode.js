import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { Heading } from "../components/Heading";
import { getFormattedDate } from "../utils/data";
import { useStyles } from "../utils/styles";

const initialValues = {
  pincode: ""
};

const validationSchema = Yup.object({
  pincode: Yup.string()
    .required("Pincode is required")
    .matches(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/, "Not a valid pincode")
});

export const SearchByPincode = () => {
  const [selectedValue, setSelectedValue] = React.useState("Dose1");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const classes = useStyles();

  const onSubmit = (values, actions) => {
    let finalData = {
      ...values,
      date: getFormattedDate(new Date())
    };
  };
  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        isSubmitting
      }) => (
        <Form className={classes.form} noValidate>
          <Card className={classes.cardRoot} variant="outlined">
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoComplete="pincode"
                    name="pincode"
                    variant="outlined"
                    required
                    fullWidth
                    id="Pincode"
                    label="Pincode"
                    autoFocus
                    type="number"
                    error={touched.pincode && Boolean(errors.pincode)}
                    helperText={touched.pincode && errors.pincode}
                    as={TextField}
                    minLength="6"
                    maxLength="6"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Heading title="Age Group" />

                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="18-44"
                  />
                  <FormControlLabel
                    style={{ marginLeft: "10px" }}
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="45 above"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Heading title="Dose Type" />
                  <FormControlLabel
                    value="Dose1"
                    control={
                      <Radio
                        color="primary"
                        name="dosage"
                        onChange={handleRadioChange}
                        checked={selectedValue === "Dose1"}
                      />
                    }
                    label="Dose 1"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    style={{ marginLeft: "10px" }}
                    value="Dose2"
                    control={
                      <Radio
                        color="primary"
                        name="dosage"
                        onChange={handleRadioChange}
                        checked={selectedValue === "Dose2"}
                      />
                    }
                    label="Dose 2"
                    labelPlacement="end"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                // size='small'
                type="submit"
                style={{ fontSize: "18px", fontWeight: "bolder" }}
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                fullWidth
                className={classes.subButton}
              >
                {isSubmitting
                  ? "Checking Availability...."
                  : "Check Availability"}
              </Button>
            </CardActions>
          </Card>
        </Form>
      )}
    </Formik>
  );
};
