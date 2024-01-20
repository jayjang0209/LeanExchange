import React from "react";

export default function CourseIdPage({
  params,
}: {
  params: {
    courseId: string;
  };
}) {
  return (
    <div>
      <h1>Course ID: {params.courseId}</h1>
    </div>
  )
}
