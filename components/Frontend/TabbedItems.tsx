"use client";

import { Tabs } from "flowbite-react";

import ServiceList from "./Services/ServiceList";
import LinkCards from "./Doctors/LinkCards";
import { Brain, Microscope, SquareActivity, Stethoscope } from "lucide-react";

export default function TabbedItems() {
  const services = [
    {
      title: "Telehealth",
      image: "/medical-report.png",
      slug: "",
    },
    {
      title: "Weight loss",
      image: "/medical-report.png",
      slug: "",
    },
    {
      title: "Video prescription",
      image: "/medical-report.png",
      slug: "",
    },
    {
      title: "UTI consult",
      image: "/medical-report.png",
      slug: "telehealth",
    },
    {
      title: "ED consult",
      image: "/medical-report.png",
      slug: "telehealth",
    },
    {
      title: "Mental health",
      image: "/medical-report.png",
      slug: "telehealth",
    },
    {
      title: "Urgent care",
      image: "/medical-report.png",
      slug: "telehealth",
    },
  ];
  const tabs = [
    {
      title: "Popular Services",
      icon: SquareActivity,
      content: [],
      component: <ServiceList data={services} />,
    },
    {
      title: "Doctors",
      icon: Stethoscope,
      content: [],
      component: <LinkCards className="" />,
    },
    {
      title: "Specialists",
      icon: Microscope,
      content: [],
      component: <LinkCards className="bg-blue-900" />,
    },
    {
      title: "Symptoms",
      icon: Brain,
      content: [],
      component: <LinkCards className="bg-pink-900" />,
    },
  ];

  return (
    <Tabs aria-label="Tabs with underline" variant="underline">
      {tabs.map((tab, i) => {
        return (
          <Tabs.Item key={i} active title={tab.title} icon={tab.icon}>
            {tab.component}
          </Tabs.Item>
        );
      })}
    </Tabs>
  );
}
