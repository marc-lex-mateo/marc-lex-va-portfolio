"use client";

import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type SampleKind = "sheet" | "research" | "support";

const inventoryRows = [
  ["BX-014", "Shipping boxes", "64", "40", "Healthy"],
  ["LB-022", "Waybill labels", "18", "25", "Reorder"],
  ["TP-008", "Packing tape", "31", "20", "Healthy"],
  ["PB-011", "Mailing pouches", "12", "30", "Reorder"],
];

const researchRows = [
  ["Provider A", "₱1,200", "4.8/5", "Fast response", "Shortlist"],
  ["Provider B", "₱980", "4.4/5", "Lowest cost", "Compare"],
  ["Provider C", "₱1,450", "4.9/5", "Best support", "Shortlist"],
];

function DemoTable({ kind }: { kind: "sheet" | "research" }) {
  const headers = kind === "sheet"
    ? ["SKU", "Item", "On hand", "Reorder at", "Status"]
    : ["Option", "Monthly cost", "Rating", "Key note", "Decision"];
  const rows = kind === "sheet" ? inventoryRows : researchRows;

  return (
    <div className="demo-table-wrap">
      <Table>
        <TableHeader>
          <TableRow>{headers.map((header) => <TableHead key={header}>{header}</TableHead>)}</TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row[0]}>
              {row.map((cell, index) => (
                <TableCell key={`${row[0]}-${index}`}>
                  {index === row.length - 1 ? <span className={`demo-status ${cell.toLowerCase()}`}>{cell}</span> : cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function SupportDemo() {
  return (
    <div className="response-demo">
      <article>
        <p>Scenario 01 · Delayed delivery</p>
        <blockquote>
          Hello Ana, thank you for contacting us. I checked order MP-1048 and confirmed that it is still in transit. I have requested an updated delivery schedule and will follow up with you within 24 hours.
        </blockquote>
      </article>
      <article>
        <p>Scenario 02 · Missing information</p>
        <blockquote>
          Hi Carlo, I can help complete your request. Please send the missing reference number and delivery address so I can verify the record and provide the correct next step.
        </blockquote>
      </article>
      <article>
        <p>Scenario 03 · Escalation follow-up</p>
        <blockquote>
          Hello Mia, your concern has been forwarded to the appropriate team for priority review. I have documented the issue and will update you as soon as I receive their response.
        </blockquote>
      </article>
    </div>
  );
}

export function SampleDialog({ kind, title }: { kind: SampleKind; title: string }) {
  const scenario = kind === "sheet"
    ? "A small online store needs a clear way to monitor supply levels and identify items that require restocking."
    : kind === "research"
      ? "A business owner needs a concise comparison of three service providers before choosing a monthly plan."
      : "A support team needs consistent, professional replies for common customer concerns.";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="sample-demo-button">
          View demonstration <Eye aria-hidden="true" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sample-dialog-content">
        <DialogHeader>
          <p className="demo-disclosure">Demonstration project · fictional data</p>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{scenario}</DialogDescription>
        </DialogHeader>

        <div className="demo-brief">
          <span><strong>Objective</strong>Organize information for quick review and follow-up.</span>
          <span><strong>Approach</strong>Clear labels, consistent formatting, and visible priorities.</span>
        </div>

        {kind === "support" ? <SupportDemo /> : <DemoTable kind={kind} />}

        <p className="demo-note">
          This is an original practice demonstration created to show how I would approach the task. It is not paid client work.
        </p>
      </DialogContent>
    </Dialog>
  );
}
