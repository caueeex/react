import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { colors, globalStyles as s } from "@/styles/global";

export default function ProfileScreen() {
    return (
        <ScrollView contentContainerStyle={s.container}>
            <Text style={s.title}>Meu Perfil</Text>
            <Text style={s.subtitle}>Um pouco sobre mim</Text>

            <View style={[s.center, { marginVertical: 24 }]}>
                <Image
                    source={require("@/assets/images/foto-caue.jpg")}
                    style={styles.avatar}
                />
            </View>

            <Text style={s.label}>Quem sou eu</Text>
            <View style={[s.card, s.cardFull, { padding: 16, height: "auto", minHeight: 120 }]}>
                <Text style={[s.cardTextLight, { fontSize: 15, lineHeight: 24 }]}>
                    EU SEI DESENVOLVER SITES
                </Text>
            </View>

            <Text style={s.label}>Interesses</Text>
            <View style={s.row}>
                <View style={[s.card, s.w50, { backgroundColor: colors.primary }]}>
                    <Text style={s.textWhite}>Código</Text>
                </View>
                <View style={[s.card, s.w50, { backgroundColor: colors.purple }]}>
                    <Text style={s.textWhite}>Design</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: colors.white,
        borderWidth: 3,
        borderColor: colors.primary,
    },
});
