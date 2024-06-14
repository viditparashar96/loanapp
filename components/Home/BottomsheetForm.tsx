import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, {
  Ref,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { StyleSheet, View } from "react-native";
import AddCardShowcase from "../LoanForms/AddCardShowcase";
import CardDetails from "../LoanForms/CardDetails";
import Completed from "../LoanForms/Completed";
import Duration from "../LoanForms/Duration";
import PersonalDetails from "../LoanForms/PersonalDetails";
import ProfessionalDetails from "../LoanForms/ProfessionalDetails";

const BottomsheetForm = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["75%", "90%"], []);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [snapPointIndex, setSnapPointIndex] = useState<number>(0);
  const handleSheetClose = useCallback(() => {
    setCurrentPage(0);
  }, []);

  useEffect(() => {
    if (currentPage === 0) {
      setSnapPointIndex(0);
    } else {
      setSnapPointIndex(1);
    }
  }, [currentPage]);

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? 0 : prev - 1));
  };
  const handleDismiss = () => {};

  console.log("Next", currentPage);
  return (
    <BottomSheetModal
      ref={ref}
      index={snapPointIndex}
      snapPoints={snapPoints}
      enableContentPanningGesture={false}
      onDismiss={handleSheetClose}
    >
      <View style={styles.contentContainer}>
        {currentPage === 0 ? <Duration handleNext={handleNext} /> : null}
        {currentPage === 1 ? (
          <PersonalDetails handlePrev={handlePrev} handleNext={handleNext} />
        ) : null}
        {currentPage === 2 ? (
          <ProfessionalDetails
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        ) : null}

        {currentPage === 3 ? (
          <AddCardShowcase handlePrev={handlePrev} handleNext={handleNext} />
        ) : null}
        {currentPage === 4 ? (
          <CardDetails handlePrev={handlePrev} handleNext={handleNext} />
        ) : null}
        {currentPage === 5 ? <Completed handleDismiss={handleDismiss} /> : null}
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: "600",
    padding: 20,
  },
});

export default BottomsheetForm;
