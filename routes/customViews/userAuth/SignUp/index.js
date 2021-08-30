import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, message, Radio } from "antd";
import Link from "next/link";
import IntlMessages from "../../../../util/IntlMessages";
import CircularProgress from "../../../../app/components/CircularProgress";
import { useAuth } from "../../../../util/use-auth";

import "./index.css";

const FormItem = Form.Item;

const SignUP = () => {
  const { isLoading, error, signup, loginWithSocial } = useAuth();
  const [role, setRole] = useState("");

  useEffect(() => {
    if (error) {
      message.error(error.toString()).then((r) => r);
    }
  }, [error]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    const { email, password } = values;
    signup(email, password);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-logo-content">
            <div className="gx-app-logo-content-bg">
              <img
                src="/images/fesklas_banner.jpg"
                alt="Fesklas"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "right",
                }}
              />
            </div>
            <div className="gx-app-logo-wid">
              <h1>
                <IntlMessages id="app.userAuth.signUp" />
              </h1>
              <p>
                <IntlMessages id="app.userAuth.bySigning" />
              </p>
              <p>
                <IntlMessages id="app.userAuth.getAccount" />
              </p>
            </div>
            <div className="gx-app-logo">
              <img alt="example" src={"/images/logo.png"} />
            </div>
          </div>

          <div className="gx-app-login-content">
            <Form
              initialValues={{ remember: true }}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="gx-signin-form gx-form-row0"
              layout="vertical"
            >
              <FormItem
                rules={[
                  { required: true, message: "Please input your First name!" },
                ]}
                name="firstname"
                label="First name"
              >
                <Input placeholder="First name" />
              </FormItem>
              <FormItem
                rules={[
                  { required: true, message: "Please input your Last name!" },
                ]}
                name="lastname"
                label="Last name"
              >
                <Input placeholder="Last name" />
              </FormItem>
              <FormItem
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </FormItem>
              <FormItem
                rules={[
                  { required: true, message: "Please input your Last name!" },
                ]}
                name="phone"
                label="Phone Number"
              >
                <Input placeholder="e.g. 080333332222" />
              </FormItem>
              <FormItem
                rules={[{ required: true, message: "Please input your LGA!" }]}
                name="lga"
                label="Local Govt. Area"
              >
                <Input placeholder="e.g. Mbaise North" />
              </FormItem>
              <FormItem
                rules={[
                  {
                    required: true,
                    message: "Please input your Apartment Address!",
                  },
                ]}
                name="address"
                label="Apartment address"
              >
                <Input placeholder="House number, street name, city, state" />
              </FormItem>
              <p>Which are you?</p>
              <div className="gx-mb-4">
                <Radio.Group value={role} onChange={handleRoleChange}>
                  <Radio value="owner">Apartment Owner/Caretaker</Radio>
                  <Radio value="tenant">Tenant/Occupant</Radio>
                </Radio.Group>
              </div>
              {role === "tenant" && role !== "" ? (
                <>
                  <FormItem
                    // rules={[{ required: true, message: "Please input your the " }]}
                    name="owner_name"
                    label="Owner Name"
                  >
                    <Input placeholder="Owner/Caretakers' name" />
                  </FormItem>
                  <FormItem
                    // rules={[{ required: true, message: "Please input your Apartment Address!" }]}
                    name="owner_phone"
                    label="Owner/Caretaker's phone number"
                  >
                    <Input placeholder="e.g. 08033332234" />
                  </FormItem>
                  <FormItem valuePropName="checked">
                    <Checkbox>I don't have this info</Checkbox>
                  </FormItem>
                </>
              ) : (
                ""
              )}
              {role === "owner" ? (
                <FormItem
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                  label="Password"
                >
                  <Input type="password" placeholder="Password" />
                </FormItem>
              ) : (
                ""
              )}
              <FormItem valuePropName="checked">
                <Checkbox>By signing up you agree to our </Checkbox>
                <Link className="gx-login-form-forgot" href="#">
                  <a>Terms and Conditions</a>
                </Link>
              </FormItem>
              <FormItem>
                <Button type="primary" className="gx-mb-0" htmlType="submit">
                  <IntlMessages id="app.userAuth.signUp" />
                </Button>
                <span>
                  <IntlMessages id="app.userAuth.or" />{" "}
                </span>
                <Link href="/signin">
                  <a>
                    <IntlMessages id="app.userAuth.signIn" />
                  </a>
                </Link>
              </FormItem>
            </Form>
          </div>
          {isLoading && (
            <div className="gx-loader-view">
              <CircularProgress />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUP;
