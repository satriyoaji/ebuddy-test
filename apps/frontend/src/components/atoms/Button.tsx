// src/components/atoms/Button.tsx
import { Button } from "@mui/material";

export default function UpdateButton({ onClick }: { onClick: () => void }) {
    return <Button onClick={onClick} variant="contained">Update</Button>;
}
