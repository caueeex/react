import { StyleSheet } from "react-native";

export const colors = {
    primary: '#3b82f6',
    success: '#22c55e',
    danger: '#ef4444',
    warning: '#f59e0b',
    dark: '#1f2937',
    light: '#f3f4f6',
    white: '#fff',

    // cores extras (paleta do layout)
    gray: "#6b7280",
    orange: "#F97316",
    purple: "#A855F7",
    pink: "#EC4899",
    teal: "#14B8A6",
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.light,
    },
    row: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 15,
    },

    card: {
        flex: 1,
        height: 80,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.dark,
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: "#6b7280",
        marginBottom: 20,
    },
    label: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#4b5563",
        textTransform: "uppercase",
        letterSpacing: 1,
        marginBottom: 8,
        marginTop: 10,
    },
    textWhite: {
        color: colors.white,
        fontWeight: "600",
        fontSize: 14,
    },

    w50: { width: "48%" },
    center: { justifyContent: "center", alignItems: "center" },
    textRight: { alignSelf: "stretch", textAlign: "right", paddingHorizontal: 12 },
    cardFull: { width: "100%", flex: undefined },

    cardTextLight: {
        color: colors.dark,
    },
});

