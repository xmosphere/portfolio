import React from "react";
import { Link } from "react-router-dom";
import { ThemedButton } from "../assets/theme";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <ThemedButton>
            <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
        </ThemedButton>
    );
};

export default ButtonMailto;