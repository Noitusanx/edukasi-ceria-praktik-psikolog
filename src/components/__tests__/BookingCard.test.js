import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingCard from "../BookingComponents/BookingCard";

global.IntersectionObserver = class {
  constructor(callback) {}
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
  disconnect() {
    return null;
  }
};

describe("Cards Component", () => {
  it("merender form pemesanan", () => {
    render(<BookingCard />);

    expect(screen.getByText(/Pesan Layanan/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Umur/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tipe Layanan/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Keluhan/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Catatan Tambahan/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Pesan/i })).toBeInTheDocument();
  });

  it("submit form dengan data yang sesuai", () => {
    render(<BookingCard />);

    const fullnameInput = screen.getByLabelText(/Nama Lengkap/i);
    const ageInput = screen.getByLabelText(/Umur/i);
    const serviceInput = screen.getByLabelText(/Tipe Layanan/i);
    const illnessInput = screen.getByLabelText(/Keluhan/i);
    const notesInput = screen.getByLabelText(/Catatan Tambahan/i);
    const submitButton = screen.getByRole("button", { name: /Pesan/i });

    fireEvent.change(fullnameInput, { target: { value: "John Doe" } });
    fireEvent.change(ageInput, { target: { value: 30 } });
    fireEvent.change(serviceInput, { target: { value: "konsultasi" } });
    fireEvent.change(illnessInput, { target: { value: "Stres kerja" } });
    fireEvent.change(notesInput, { target: { value: "Tidak ada" } });

    global.open = jest.fn();

    fireEvent.click(submitButton);

    expect(global.open).toHaveBeenCalled();
    const url = global.open.mock.calls[0][0];
    expect(url).toContain(
      "Halo%2C%20saya%20ingin%20memesan%20layanan%20berikut"
    );
    expect(url).toContain("John%20Doe");
    expect(url).toContain("30");
    expect(url).toContain("konsultasi");
    expect(url).toContain("Stres%20kerja");
    expect(url).toContain("Tidak%20ada");

    expect(global.open).toHaveBeenCalledWith(
      expect.any(String),
      "_blank",
      "noopener,noreferrer"
    );
  });
});
