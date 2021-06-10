import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native';

export default props => {
    return (
        <Modal
            onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType={'slide'}
            transparent={true}
        >
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    <BotaoDificuldade
                        style={styles.bgEasy}
                        onLevelSelected={props.onLevelSelected}
                        level={0.1}
                        levelLabel={'Fácil'}
                    />
                    <BotaoDificuldade
                        style={styles.bgNormal}
                        onLevelSelected={props.onLevelSelected}
                        level={0.2}
                        levelLabel={'Intermediário'}
                    />
                    <BotaoDificuldade
                        style={styles.bgHard}
                        onLevelSelected={props.onLevelSelected}
                        level={0.3}
                        levelLabel={'Difícil'}
                    />
                </View>
            </View>
        </Modal>
    );
}

const BotaoDificuldade = props =>
    <TouchableOpacity
        style={[styles.button, props.style]}
        onPress={() => props.onLevelSelected(props.level)}
    >
        <Text style={styles.buttonLabel}>{props.levelLabel}</Text>
    </TouchableOpacity>;

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EEE'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold'
    },
    bgEasy: {
        backgroundColor: '#49b65D'
    },
    bgNormal: {
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#F26337'
    },
});
