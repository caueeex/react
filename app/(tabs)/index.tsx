import { View, Text, ScrollView } from "react-native";
import { colors, globalStyles as s } from "@/styles/global";

export default function App() {
    return (
        <ScrollView contentContainerStyle={s.container}>
            <Text style={s.title}>Aula 2 - Design System</Text>
            <Text style={s.subtitle}>Estilos Globais e Reutilizáveis</Text>

            <Text style={s.label}>Cores do sistema (flex)</Text>
            <View style={s.row}>
                <View style={[s.card, { backgroundColor: colors.danger }]}>
                    <Text style={s.textWhite}>Danger</Text>
                </View>
                <View style={[s.card, { backgroundColor: colors.success }]}>
                    <Text style={s.textWhite}>Success</Text>
                </View>
                <View style={[s.card, { backgroundColor: colors.primary }]}>
                    <Text style={s.textWhite}>Primary</Text>
                </View>
            </View>

            <Text style={s.label}>2 colunas (fixas 48%)</Text>
            <View style={s.row}>
                <View style={[s.card, s.w50, { backgroundColor: colors.orange }]}>
                    <Text style={[s.textWhite, s.textRight]}>Laranja</Text>
                </View>
                <View style={[s.card, s.w50, { backgroundColor: colors.purple }]}>
                    <Text style={[s.textWhite, s.textRight]}>Roxo</Text>
                </View>
            </View>

            <Text style={s.label}>Sidebar + main content</Text>
            <View style={s.row}>
                <View style={[s.card, s.cardFull, { backgroundColor: colors.gray }]}>
                    <Text style={s.textWhite}>Painel de Controle</Text>
                </View>
            </View>

            <Text style={s.label}>4 colunas (sistema automático)</Text>
            <View style={s.row}>
                <View style={[s.card, { backgroundColor: colors.pink }]}>
                    <Text style={s.textWhite}>A</Text>
                </View>
                <View style={[s.card, { backgroundColor: colors.warning }]}>
                    <Text style={s.textWhite}>B</Text>
                </View>
                <View style={[s.card, { backgroundColor: colors.teal }]}>
                    <Text style={s.textWhite}>C</Text>
                </View>
                <View style={[s.card, { backgroundColor: colors.primary }]}>
                    <Text style={s.textWhite}>D</Text>
                </View>
            </View>
        </ScrollView>
    );
}
