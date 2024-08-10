import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatusDisplayHandler } from './StatusDisplayHandler';

describe("Status", () => {
    test('Check if status component has right class according to status ON LEAVE', async () => {
        render(<StatusDisplayHandler status='On leave' />);
        await screen.findByTestId("status");
        const span = screen.getByTestId("status");
        expect(span.classList.contains('text-bg-warning')).toEqual(true);
    });
    test('Check if status component has right class according to status EMPLOYED', async () => {
        render(<StatusDisplayHandler status='Employed' />);
        await screen.findByTestId("status");
        const span = screen.getByTestId("status");
        expect(span.classList.contains('text-bg-success')).toEqual(true);
    });

    test('Check if status component has right class according to status FIRED', async () => {
        render(<StatusDisplayHandler status='Fired' />);
        await screen.findByTestId("status");
        const span = screen.getByTestId("status");
        expect(span.classList.contains('text-bg-danger')).toEqual(true);
    });

    test('Check if status component has right class according to status OTHER THAN DEFINED', async () => {
        //@ts-expect-error to check input parameter other than expected
        expect(StatusDisplayHandler("test")).toBe(null);
    });

});