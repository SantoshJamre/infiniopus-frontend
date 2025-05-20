import React from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../layout/Layout";
import ApplicationForm from "../ApplicationForm";

const ApplyPage = () => {
  const [searchParams] = useSearchParams();
  const program = searchParams.get("program") || "";
  const type = searchParams.get("type") as "internship" | "course" | undefined;

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Apply for {program || "Our Programs"}
          </h1>
          <ApplicationForm defaultProgram={program} programType={type} />
        </div>
      </div>
    </Layout>
  );
};

export default ApplyPage;
