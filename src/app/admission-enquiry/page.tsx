"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import AdmissionForm from "@/components/AdmissionForm";

const AdmissionEnquiryPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Admission Inquiry"
        description="Take the first step towards a brilliant career in hospitality. Fill out the form below to check your eligibility and start your admission process."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[800px] rounded-3xl bg-white p-10 shadow-two dark:bg-gray-dark md:p-[60px]">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Student Enrollment Form
              </h2>
              <p className="text-base font-medium text-body-color">
                Prepare for a world of opportunities. Our team will review your details and get back to you within 24 hours.
              </p>
            </div>
            
            <AdmissionForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default AdmissionEnquiryPage;
