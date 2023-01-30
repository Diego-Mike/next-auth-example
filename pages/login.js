import Layout from "@/layout/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const Login = () => {
  const [show, setShow] = useState(false);

  const router = useRouter();

  const onSubmit = async (values) => {
    console.log(`loggin credential values -->`);
    console.log(values);
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
    console.log("status");
    console.log(status);

    if (status.ok) {
      router.push(status.url);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  const handleGoogleSignIn = async () => {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  };

  const handleGithubSignIn = async () => {
    signIn("github", { callbackUrl: "http://localhost:3000/" });
  };

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10 ">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            asjcnsjadnjsandjsndj amsd asjd nasdn asj
          </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              name="email"
              type={"email"}
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              name="password"
              type={`${show ? "text" : "password"}`}
              placeholder="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          <div className="input-button">
            <button className={styles.button} type="submit">
              Login
            </button>
          </div>

          <div className="input-button">
            <button
              className={styles.button_custom}
              type="button"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
              <Image
                src={"/assets/google.svg"}
                width={20}
                height={20}
                alt="penetration"
              />
            </button>
          </div>

          <div className="input-button">
            <button
              onClick={handleGithubSignIn}
              className={styles.button_custom}
              type="button"
            >
              Sign in with Github
              <Image
                src={"/assets/github.svg"}
                width={25}
                height={25}
                alt="penetration"
              />
            </button>
          </div>
        </form>

        <p className="text-center text-gray-400">
          don&apos;t have an accont yet ? &nbsp;
          <Link className="text-blue-700" href={"/register"}>
            Register
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default Login;
