import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors, globalStyles as s } from "@/styles/global";

const POSTS = [
    { id: "1", uri: "https://picsum.photos/seed/d1/400/400" },
    { id: "2", uri: "https://picsum.photos/seed/d2/400/400" },
    { id: "3", uri: "https://picsum.photos/seed/d3/400/400" },
    { id: "4", uri: "https://picsum.photos/seed/d4/400/400" },
    { id: "5", uri: "https://picsum.photos/seed/d5/400/400" },
    { id: "6", uri: "https://picsum.photos/seed/d6/400/400" },
    { id: "7", uri: "https://picsum.photos/seed/d7/400/400" },
    { id: "8", uri: "https://picsum.photos/seed/d8/400/400" },
    { id: "9", uri: "https://picsum.photos/seed/d9/400/400" },
];

export default function ProfileScreen() {
    return (
        <ScrollView contentContainerStyle={[s.container, styles.profileContainer]}>
            {/* Cabeçalho: avatar à esquerda, nome + stats à direita */}
            <View style={styles.header}>
                <Image
                    source={{ uri: "https://picsum.photos/seed/davi/200/200" }}
                    style={styles.avatar}
                />
                <View style={styles.headerRight}>
                    <Text style={styles.displayName}>Davi</Text>
                    <Text style={styles.username}>@davi.codes</Text>
                    <View style={styles.statsInline}>
                        <Text style={styles.statText}><Text style={styles.statBold}>18</Text> posts</Text>
                        <Text style={styles.statDot}> · </Text>
                        <Text style={styles.statText}><Text style={styles.statBold}>847</Text> seguidores</Text>
                        <Text style={styles.statDot}> · </Text>
                        <Text style={styles.statText}><Text style={styles.statBold}>312</Text> seguindo</Text>
                    </View>
                </View>
            </View>

            {/* Bio em faixa colorida */}
            <View style={styles.bioStrip}>
                <Text style={styles.bio}>
                    Front-end dev · React & React Native · Rio de Janeiro 🌴
                </Text>
            </View>

            {/* Botão Seguir (pill) */}
            <TouchableOpacity style={styles.followButton} activeOpacity={0.8}>
                <Text style={s.textWhite}>Seguir</Text>
            </TouchableOpacity>

            {/* 3 abas estilo minimalista */}
            <View style={styles.tabs}>
                <View style={[styles.tab, styles.tabActive]}>
                    <Text style={styles.tabText}>⊞</Text>
                </View>
                <View style={styles.tab}>
                    <Text style={[styles.tabText, styles.tabTextInactive]}>▶</Text>
                </View>
                <View style={styles.tab}>
                    <Text style={[styles.tabText, styles.tabTextInactive]}>◇</Text>
                </View>
            </View>

            {/* Grade 3 colunas */}
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
        paddingHorizontal: 16,
        paddingBottom: 40,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.teal,
    },
    headerRight: {
        flex: 1,
        marginLeft: 20,
    },
    displayName: {
        fontSize: 18,
        fontWeight: "700",
        color: colors.dark,
    },
    username: {
        fontSize: 13,
        color: colors.gray,
        marginTop: 2,
    },
    statsInline: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        marginTop: 8,
    },
    statText: {
        fontSize: 13,
        color: colors.gray,
    },
    statBold: {
        fontWeight: "700",
        color: colors.dark,
    },
    statDot: {
        fontSize: 13,
        color: colors.gray,
    },
    bioStrip: {
        backgroundColor: colors.teal,
        marginHorizontal: -16,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    bio: {
        fontSize: 13,
        color: colors.white,
        lineHeight: 20,
        textAlign: "center",
    },
    followButton: {
        backgroundColor: colors.teal,
        paddingVertical: 10,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    tabs: {
        flexDirection: "row",
        marginBottom: 4,
    },
    tab: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
    },
    tabActive: {
        borderBottomWidth: 3,
        borderBottomColor: colors.teal,
    },
    tabText: {
        fontSize: 20,
        color: colors.teal,
    },
    tabTextInactive: {
        color: colors.gray,
        opacity: 0.6,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: -2,
    },
    gridItem: {
        width: "33.333%",
        aspectRatio: 1,
        padding: 2,
    },
    gridImage: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.gray,
    },
});
