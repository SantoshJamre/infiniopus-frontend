import React from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../layout/Layout";
import JobApplicationForm from "../JobApplicationForm";

const ApplyJobPage = () => {
  const [searchParams] = useSearchParams();
  const position = searchParams.get("position") || "";
  const department = searchParams.get("department") || "";

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Apply for {position || "Job Position"}
          </h1>
          <JobApplicationForm defaultPosition={position} defaultDepartment={department} />
        </div>
      </div>
    </Layout>
  );
};

export default ApplyJobPage;
