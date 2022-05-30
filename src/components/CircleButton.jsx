import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function CircleButton(props) {
	const { children } = props;
	return (
		<View style={styles.circlButton}>
      <Text style={styles.circlButtonLabel}>{children}</Text>
    </View>
	);
}

CircleButton.propTypes = {
	children: string.isRequired,
}

const styles = StyleSheet.create({
	circlButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circlButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40
  }
});