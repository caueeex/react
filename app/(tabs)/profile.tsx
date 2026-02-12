import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors, globalStyles as s } from "@/styles/global";

const POSTS = [
    { id: "1", uri: "https://picsum.photos/seed/e1/400/400" },
    { id: "2", uri: "https://picsum.photos/seed/e2/400/400" },
    { id: "3", uri: "https://picsum.photos/seed/e3/400/400" },
    { id: "4", uri: "https://picsum.photos/seed/e4/400/400" },
    { id: "5", uri: "https://picsum.photos/seed/e5/400/400" },
    { id: "6", uri: "https://picsum.photos/seed/e6/400/400" },
];

export default function ProfileScreen() {
    return (
        <ScrollView contentContainerStyle={[s.container, styles.profileContainer]}>
            {/* Avatar centralizado no topo */}
            <View style={styles.topSection}>
                <Image
                    source={{ uri: "https://picsum.photos/seed/eduardo/200/200" }}
                    style={styles.avatar}
                />
                <Text style={styles.displayName}>Eduardo</Text>
                <Text style={styles.username}>@eduardo.dev</Text>
            </View>

            {/* Stats em 3 caixinhas */}
            <View style={styles.statsRow}>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>56</Text>
                    <Text style={styles.statLabel}>Publicações</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>3.2k</Text>
                    <Text style={styles.statLabel}>Seguidores</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>289</Text>
                    <Text style={styles.statLabel}>Seguindo</Text>
                </View>
            </View>

            {/* Bio simples */}
            <Text style={styles.bio}>
                UX Designer & Dev · Belo Horizonte 🏔️
                {"\n"}
                <Text style={styles.bioLink}>eduardo.design</Text>
            </Text>

            {/* Botão Seguir + ícone opções */}
            <View style={styles.actionsRow}>
                <TouchableOpacity style={styles.followButton} activeOpacity={0.8}>
                    <Text style={s.textWhite}>Seguir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.moreButton} activeOpacity={0.8}>
                    <Text style={styles.moreButtonText}>⋯</Text>
                </TouchableOpacity>
            </View>

            {/* Aba Publicações */}
            <View style={styles.tabs}>
                <View style={[styles.tab, styles.tabActive]}>
                    <Text style={styles.tabIcon}>⊞</Text>
                    <Text style={styles.tabLabel}>Publicações</Text>
                </View>
            </View>

            {/* Grade 2 colunas com cantos arredondados */}
            <View style={styles.grid}>
                {POSTS.map((post) => (
                    <View key={post.id} style={styles.gridItem}>
                        <Image source={{ uri: post.uri }} style={styles.gridImage} resizeMode="cover" />
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    topSection: {
        alignItems: "center",
        marginTop: 12,
        marginBottom: 20,
    },
    avatar: {
        width: 96,
        height: 96,
        borderRadius: 48,
        backgroundColor: colors.white,
        borderWidth: 3,
        borderColor: colors.orange,
    },
    displayName: {
        fontSize: 22,
        fontWeight: "700",
        color: colors.dark,
        marginTop: 14,
    },
    username: {
        fontSize: 14,
        color: colors.gray,
        marginTop: 4,
    },
    statsRow: {
        flexDirection: "row",
        gap: 8,
        marginBottom: 16,
    },
    statBox: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: "center",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 3,
    },
    statNumber: {
        fontSize: 18,
        fontWeight: "800",
        color: colors.dark,
    },
    statLabel: {
        fontSize: 11,
        color: colors.gray,
        marginTop: 4,
    },
    bio: {
        fontSize: 14,
        color: colors.dark,
        lineHeight: 22,
        marginBottom: 16,
        textAlign: "center",
    },
    bioLink: {
        color: colors.orange,
        fontWeight: "600",
    },
    actionsRow: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 24,
    },
    followButton: {
        flex: 1,
        backgroundColor: colors.orange,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    moreButton: {
        width: 44,
        height: 44,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#d1d5db",
        alignItems: "center",
        justifyContent: "center",
    },
    moreButtonText: {
        fontSize: 20,
        color: colors.dark,
        fontWeight: "600",
    },
    tabs: {
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#e5e7eb",
        marginHorizontal: -20,
    },
    tab: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        paddingVertical: 12,
    },
    tabActive: {
        borderTopWidth: 3,
        borderTopColor: colors.orange,
        marginTop: -1,
    },
    tabIcon: {
        fontSize: 18,
        color: colors.orange,
    },
    tabLabel: {
        fontSize: 13,
        fontWeight: "600",
        color: colors.dark,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: -4,
        marginTop: 0,
    },
    gridItem: {
        width: "50%",
        aspectRatio: 1,
        padding: 4,
    },
    gridImage: {
        width: "100%",
        height: "100%",
        borderRadius: 16,
        backgroundColor: colors.gray,
    },
});
